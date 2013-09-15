/*jslint maxlen: 140, unused: false */

var dir = __dirname,
    scripts_dir = dir + '/scripts',
    build_dir = dir + '/app/assets',
    grunt = {
        'watch' : [{
            'js' : {
                'files': [scripts_dir + '/*.js'],
                'tasks': ['closureCompiler:refinerycms-share_this_js',
                            'concat:refinerycms-share_this_js',
                            'copy:refinerycms-share_this_js']
            }
        }],
        'closureCompiler': [{
            'js' : {
                'options': {
                    'checkModified': true,
                    'compilerOpts': {
                        'compilation_level': 'ADVANCED_OPTIMIZATIONS',
                        'warning_level': 'verbose',
                        'externs': [
                            'externs/jquery-1.9.js',
                            'externs/custom.js',
                            'externs/refinery.js',
                            'externs/refinery_object.js',
                            dir + '/externs/share_this.js'
                        ],
                        'language_in': 'ECMASCRIPT5_STRICT',
                        'summary_detail_level': 3,
                        //'formatting': 'PRETTY_PRINT',
                        'output_wrapper': '"(function(){%output%}());"'
                    }
                },
                'src': [
                    'scripts/share_this.js'
                ],
                'dest': '.tmp/assets/javascripts/share_this.min.js'
            }
        }],
        'concat': [{
            'js' : {
                'src': [
                    'scripts/share_this.js'
                ],
                'dest': '.tmp/assets/javascripts/share_this.all.js'
            }
        }],
        'copy': [{
            'js': {
                'files': [{
                    'expand': true,
                    'dot': true,
                    'cwd': dir + '/.tmp/assets/javascripts/',
                    'dest': build_dir + '/javascripts/refinery/share_this/',
                    'src': [
                        '**'
                    ]
                }]
            }
        }]
    };

exports.grunt = grunt;
