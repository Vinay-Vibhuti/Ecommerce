pipeline{
agent { docker { image 'mcr.microsoft.com/playwright:v1.38.0-jammy' } }
stages{
stage('test'){
steps{
sh '''
npx playwright test --list
npx playwright test
'''
}
}
}
}