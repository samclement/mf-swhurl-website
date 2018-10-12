#!/bin/sh
if [ $# -eq 0 ]
  then
    echo "Please supply target environemnt as the only argument (staging|production)"
fi

echo ${DOCKER_PASSWORD} | docker login -u ${DOCKER_USERNAME} --password-stdin
while test $# -gt 0; do
  case "$1" in
    staging)
      shift
      echo "Publishing staging image"
      docker build --build-arg DRONE_COMMIT=${DRONE_COMMIT} -t swhurl/website:${DRONE_COMMIT} .
      docker push swhurl/website:${DRONE_COMMIT}
      ;;
    production)
      shift
      GIT_TAG=${DRONE_TAG##v}
      echo "Publishing production image: $GIT_TAG"
      docker pull swhurl/website:${DRONE_COMMIT}
      docker tag swhurl/website:${DRONE_COMMIT} swhurl/website:$GI_TAG
      docker push swhurl/website:$GIT_TAG
      ;;
    *)
      echo "Please supply either 'staging' or 'production' as the target environment"
      break
      ;;
  esac
done
