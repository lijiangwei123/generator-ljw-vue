const Generator = require("yeoman-generator");

module.exports = class extends Generator {
    prompting (){
        return this.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'Your project name',
                default: this.appname
            }
        ])
        .then(answers => {
            this.answers = answers
        })
    }

    writing(){
        // 把每一个文件都通过模板转换到目标路径
        const templates = [
            'README.md',
            'package.json',
            'package-lock.json',
            'index.html',
            '.postcssrc.js',
            '.gitignore',
            '.editorconfig',
            '.babelrc',
            'static/.gitkeep',
            'src/main.js',
            'src/App.vue',
            'src/router/index.js',
            'src/components/HelloWorld.vue',
            'src/assets/logo.png',
            'config/dev.env.js',
            'config/index.js',
            'config/prod.env.js',
            'build/build.js',
            'build/check-versions.js',
            'build/logo.png',
            'build/utils.js',
            'build/vue-loader.conf.js',
            'build/webpack.base.conf.js',
            'build/webpack.dev.conf.js',
            'build/webpack.prod.conf.js',
        ];

        templates.forEach(template => {
            // template每一个文件路径
            this.fs.copyTpl(
                this.templatePath(template),
                this.destinationPath(template),
                this.answers
            )
        })
    }
}