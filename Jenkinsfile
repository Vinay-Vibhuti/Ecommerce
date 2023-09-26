pipeline{
agent { none { image 'mcr.microsoft.com/playwright:v1.37.1-jammy' } }
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