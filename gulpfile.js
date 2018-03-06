var gulp = require('gulp');
var ts = require('gulp-typescript');
var path = require('path');
var sourceMaps = require('gulp-sourcemaps');
var tsProject = ts.createProject("tsconfig.json");

var paths = {    
  data:['json/**/*.json', 'features/**/*.feature']  
};

var dest = "target";

gulp.task('compile',()=>{
    return    tsProject.src()
                .pipe(sourceMaps.init())
                .pipe(tsProject())
                .js
                .pipe(sourceMaps.write({        
                    sourceRoot: function(file){
                        var relPath = path.relative(path.dirname(file.path),file.base);
                        console.log(file.base);
                        return relPath;
                    }
                }))
            .pipe(gulp.dest(dest));
});

gulp.task("copyData", () =>
{
    return gulp.src(paths.data, {base: '.'}).pipe(gulp.dest(dest));
});

gulp.task('watch', ()=>{
    gulp.watch("**/!(target)/*.json", ['copyData']);
    gulp.watch("**/*.ts",['compile']);
});

gulp.task("default", ['copyData', 'compile', 'watch']);
