cp -r /www/test/output /www/build-${CIRCLE_BUILD_NUM} && mc cp -r /www/build-${CIRCLE_BUILD_NUM} swhurl/mf-test-output/
mc policy set download swhurl/mf-test-output/build-${CIRCLE_BUILD_NUM}/index.html
echo '\n***************\n'
echo https://minio.swhurl.com/mf-test-output/build-${CIRCLE_BUILD_NUM}/index.html
echo '\n***************\n'
