#!/bin/sh
if [ $# -eq 0 ]
  then
    echo "Please supply target environemnt as the only argument (staging|production)"
fi

echo ${DOCKER_PASSWORD} | docker login -u ${DOCKER_USERNAME} --password-stdin registry.swhurl.com
while test $# -gt 0; do
  case "$1" in
    staging)
      shift
      echo "Publishing staging image"
      docker build --build-arg DRONE_COMMIT=${DRONE_COMMIT} -t registry.swhurl.com/swhurl/website:staging .
      docker push registry.swhurl.com/swhurl/website:staging
      ;;
    production)
      shift
      GIT_TAG=${DRONE_TAG##v}
      echo "Publishing production image: $GIT_TAG"
      docker build --build-arg DRONE_COMMIT=${DRONE_COMMIT} --build-arg DRONE_TAG=$GIT_TAG -t registry.swhurl.com/swhurl/website:$GIT_TAG .
      docker push registry.swhurl.com/swhurl/website:$GIT_TAG
      ;;
    *)
      echo "Please supply either 'staging' or 'production' as the target environment"
      break
      ;;
  esac
done
