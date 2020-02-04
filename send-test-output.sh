cp -r /www/test/output /www/build-${CIRCLE_BUILD_NUM} && mc cp -r /www/build-${CIRCLE_BUILD_NUM} swhurl/mf-test-output/
echo '\n***************\n'
echo https://minio.swhurl.com/mf-test-output/build-${CIRCLE_BUILD_NUM}/jest/lcov-report/index.html
echo https://minio.swhurl.com/mf-test-output/build-${CIRCLE_BUILD_NUM}/lighthouse/lighthouse.report.html
echo '\n***************\n'
