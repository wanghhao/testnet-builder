rm -rf trustnote-hub
rm -rf trustnote-witness
rm -rf trustnote-headless
rm -rf trustnote-explorer
rm -rf trustnote-relay
rm -rf trustnote-common
git clone -b remove-witnessing https://github.com/trustnote/trustnote-hub.git
git clone -b remove-witnessing https://github.com/trustnote/trustnote-witness.git
git clone -b remove-witnessing https://github.com/trustnote/trustnote-headless.git
git clone -b remove-witnessing https://github.com/trustnote/trustnote-explorer.git
git clone -b remove-witnessing https://github.com/trustnote/trustnote-relay.git
git clone -b remove-witnessing https://github.com/trustnote/trustnote-common.git
cd trustnote-common
npm install
cd ../trustnote-relay
npm install
cd ../trustnote-headless
npm install
cd ../trustnote-hub
npm install
cd ../trustnote-witness
npm install
cd ../trustnote-explorer
npm install

cd ..
cp -r genesis-scripts/* trustnote-headless/play/

cd  trustnote-headless/play/
node create_allConfig.js

rm -rf ~/.config/headless15/trustnote*

cp -r data/headless15/ ~/.config/
 
