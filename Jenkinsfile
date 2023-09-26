pipeline{
agent any
stages{
stage('test'){
steps{
sh 'npx playwright test POM_LambdaTest --project=chromium --headed'
}
}
}
}