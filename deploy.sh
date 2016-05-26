sudo rm -rf ./target
webpack --config webpack.dist.js --progress
cp -R src/fonts ./target/fonts
cp -R src/img ./target/img 
firebase deploy
