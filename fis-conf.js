//后缀名的less的文件使用fis-parser-less编译
//modules.parser.less表示设置后缀名为less的文件的parser，第二个less表示使用fis-parser-less进行编译
fis.config.set('modules.parser.less', 'less');
//将less文件编译为css
fis.config.set('roadmap.ext.less', 'css');

fis.config.set('modules.postpackager', 'simple');
fis.config.set('pack', {
    'static/js/page.js': [
        'static/js/jquery.easings.js',
        'static/js/jquery.slimscroll.js',
        'static/js/fullPage.js'
    ]
});

fis.config.merge({
    deploy : {
    	local : {
            //from参数省略，表示从发布后的根目录开始上传
            //发布到当前项目的上一级的output目录中
            to : '../iorelease'
        }
    }
});