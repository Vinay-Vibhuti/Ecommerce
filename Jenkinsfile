pipeline{
agent any
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