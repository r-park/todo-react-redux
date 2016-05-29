webpack --config webpack.dist.js --progress
sudo rm -rf ./target
webpack --config webpack.dist.js --progress
sudo mkdir -P ./target/fonts
sudo mkdir -P ./target/img
sudo cp -R ./src/fonts ./target/fonts
sudo cp -R ./src/img ./target/img 
firebase deploy
