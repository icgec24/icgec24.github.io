'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "fdbe1b562c798ee1f09f9a3f545edbc9",
".git/config": "2f882e4a4e0f3005d283678e21b3abcc",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "f01ada5d23bdfc8d97a8a8b3d70490c2",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "ef27e6d6704b0e591156031cd310e78a",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "2880d464bb89f7995f49a40b53cb7711",
".git/logs/refs/heads/dev": "9f38e05371998e72a9df43e395948679",
".git/logs/refs/heads/master": "4a3a0797da6ebcc8022eb54fdfeba5f6",
".git/logs/refs/remotes/origin/dev": "960c1391fd4b451956682e7c3460dd5b",
".git/objects/04/db02ceaa256d2b9d9bef55c4bf32c5a4370c72": "5028adfa69ac5f9a0d1411ef7431fe6d",
".git/objects/06/b185d24c4bc960d643854c5ee1994fdd57efa6": "a573a50a091b1a2ff1579fa7352d009e",
".git/objects/07/2d7c098201e41d19249b8c9366c38be5d3a43e": "8ffff375df5a870ef76e66301c8d9830",
".git/objects/08/4cd33b93aab04a547a14f4626b55289f00728f": "2ba4c645bae2f986a6affd6737e6e07d",
".git/objects/0f/2332078d71c28e8fbf3c9bc8ae93e1d42a5995": "46d25f285adf2cad8c3c9d50b6714eeb",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/13/3ab4e00028eb9d2072dd9939fbfc7b48d1da37": "fc8c3ba110eedf304d42bbf61965753c",
".git/objects/17/6845de2cc86506f160ab95fffd3654025ff52d": "d9c8922ee545d20773eabc0d1199b4e2",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/1b/d05c32cf59774fc27c791aca67c9cdb4707b95": "6a0b3037770b8be4ac08a00da3ce01ac",
".git/objects/1b/f662e80d9b344de1921cacf5594e7cb186dd81": "edebae00a794b670c5e02ad63abb8e92",
".git/objects/1d/35848be35af01a0549ef764d77e5e3d660e4c1": "5cb0ab02ed597389fa36312421f58e60",
".git/objects/1f/7cd2844a6befa775a8bc02efcf46f147da31ad": "9b5e60f5842b974c731a5f0bd129ab69",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/24/9411547c2b56767f65e8d61304e248e7a0ca64": "e85154be80e4c3b5d472a17ca6950c70",
".git/objects/28/e144a2e7b62a75e09de13ef41c2445be5f0812": "e01db18779b6c96a72175907c09e26e9",
".git/objects/2a/fb69e7532349e61f912ff76fc377129e146473": "c798ce006caa412939e441fdbd50a613",
".git/objects/32/1ddfbd3c35e4097058fadbfabd1f9e512b7011": "3970020573795288a466cc69c51a37d4",
".git/objects/36/05a4edbb958a717b509cb106d7bf6cb076b18a": "f899c1a7072c6a5dd6a1ad767648c985",
".git/objects/3a/8337859735fb21c4c9e9e03851841ed5f3a7ac": "dc325f6a6e1d3c78843cb4498e5f9fab",
".git/objects/41/3a989950611180da5b4a8cf2194e4e33cf6fee": "ef358b43961dfed0c547de242d3b7131",
".git/objects/42/82d9e1144ca4e82fdd463c287ee1f26587033a": "c9fd7063bc564f0096c8adf0a0339982",
".git/objects/45/dc8a20658bd09ecb8ca1c88f94fe80cc4ca286": "3777040b10a836277a4dcd49b2f159fa",
".git/objects/46/1b03043bc686efe77a9146c0de660a2fb95bbf": "c2492f5a881f73daacda1b8c95d55f02",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/49/43dafc7c5eb84232c67e806a7cb1a635d2b7db": "22d68f4d9ee4a8b8c663574e8b1ddb6f",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/53/7f1e78a5ae66d6c4781f56275c44bc7b0512b5": "5cbad98515a1bb2e72cca77d232f264a",
".git/objects/53/bc029451008784ea63ecc68a40d2db66d8c8ee": "02ce4af5748786beefef68eaacd20d4a",
".git/objects/55/ad80a82b66bf08e8c9cb79d91ee9bd4686b8fa": "5c7676c8b83c4ec755b78668b81fb0b6",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/9b00b6a8562f15737a07cf99b0ba1bd2e2bf31": "7240e14be285965a230b6063dd73118c",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/5a/ea77f1c0d1c1ff5774b4132c601d856bba5e09": "0de1333e55026ab7207e18c2dee166b9",
".git/objects/5d/39b698c298f5110eca0e40ae04c6848aae714b": "56ace768e411a0240ccb258baf54c7d4",
".git/objects/5f/c1e3fafb8ac93ba967e1f270ca431dbcb3bf3b": "550b27060e101db2f3d577062ace519e",
".git/objects/61/7754eba972918525223188a285ae2c513b35ad": "2cfc824437462b8ec1b2b2539b747481",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/68/4ebd569fbeb890b1d8d3ce73cfdf3bb4d78022": "5426d825b86be5392670df2e71e30aa0",
".git/objects/69/b708dff377084f2aacfec8cbe172e439f5334b": "02c27afd7acda6e328c25cb84797e80d",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/72/7c3cb721dd33abd674a8f166628de3f7617646": "f9e1694120b51f1cd6c02d79fc667ab7",
".git/objects/76/32b284f41d0aedf5a299790cf62a083866be8f": "4a3087eaa342afbd967da38105d91dd6",
".git/objects/77/da83be374de2a9373e850ad7cded34a71fbc59": "8132c8f28104a8adf736029f50e1c84d",
".git/objects/87/d04a9cf916fe04f4d9b802d762abc996d64109": "7ead6f9df154c59f38a2472d885094a8",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/94/b99ce8b9e069e581c565f3bda9edf5bbe216a5": "2ee28b9ea03f0454a02fb163cdf40856",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/95/eef67c5c51ae268d8373100c27c40b2d997fe3": "6aec8692e68ae308aa750d042a70383d",
".git/objects/97/b6eee463de5e4fcf79c6570e4173f50eca81d5": "b58977ec52e0607f13c5710fd432ef21",
".git/objects/98/a9d9295e4c4c11e9ea061dffd67326c6dd95aa": "223bf15e41c04744f476395faa9a1d8e",
".git/objects/9c/3dc03660bac3e15575f010fd7fa4f003476ad5": "7f9e7d2bba9f05acf38826761026c30c",
".git/objects/a4/c9b3c5025af7574018bb450ad5afcf068ef81e": "f841e0f63f10e452b425ae1d2a590533",
".git/objects/a4/ce1c23c1b7890a9877010ddf02c5050d327021": "5da1318db985fb0ada62f186dab69015",
".git/objects/a9/6cd26e8229f43fcebbd31ba3404cace44cf794": "64cc5e731aa8a00e0c113233ccbe6f5a",
".git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "b73a35563fa129bd884d8b5c53ee9231",
".git/objects/aa/8931d723644defd335650992dd02ee85758f5e": "06df7d4f234e0716a39b71ac825bd4a6",
".git/objects/ac/2ec51acc2b4af2cfbe62ce5cb27436b8c00f20": "bf19b11f2563545ec4adf488490b6aa5",
".git/objects/ac/fba2cbcc49befcf471668c8de037db1f65a9b2": "ceaa0b2cbc4fc8c2248f014373eea6c0",
".git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "4add97a99941aa0e9eed0f2173416ade",
".git/objects/ae/068e7259e63ad0d9307fc6f1bbddd44f07784a": "9b699fa00de8c11448c0fe3846f96440",
".git/objects/af/85be646f983b7214f50dffed5c3afb3c1d2247": "bd32ef1f9d1c1db1e43a5895dd80f81a",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/bd/660f85599e4a531d6fe80ee17037b6ffdd07d0": "1f87a847167ec79b8eb44123aebedc56",
".git/objects/c3/149acec8eafb8e2a8aafe8a092cb0190fb2d98": "4182a89a43974491a8ac327c10590841",
".git/objects/c3/54dc69f5dd0675f157ec54126a5242978040f4": "41e3f31c6707527ca55473e257666cb7",
".git/objects/c6/b30993b31a5cf80723059d1e049065b713a09b": "872698f44a996c7e11a6e9cf814ee983",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/ca/b806757b1cc00ce88c8ec53f4a08e58a8778fc": "cac5196cb3f86dcbcecd535ed1e57595",
".git/objects/cc/2048c89669a1cc25170d89e3e5e089793243c2": "0e9456b976dd20ceefe7a5a0cbaabfdc",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "ad5b6117df489509af208438785f208b",
".git/objects/cf/17e7fc1f27add714054db59005a9013e6dedc8": "59acdccab2644e1015b9d1c80ef14b8c",
".git/objects/d0/1bfd4ad2ded9629c568772b877c35ad2a249e7": "797959bfd736224ff107b9e8be4c87cc",
".git/objects/d0/99b781a7ffb3b6cbe8bb4fe44eae9fc5674105": "2b8c7325192b20b128894305964dcbc7",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d1/5df40eb1ec012636b3160e1c1f5072597b521c": "73b235db590016d8a1d2c7cb05258a27",
".git/objects/d1/9f47e9236f2ad2ae6fbcca9686c53212aa7ed3": "1a3df794a25047c20ca94b33b8ef7a02",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/67121f44ad0e2cc47e71fe6711e05b6b4ce492": "cd0c095e3072d4c2f5e91343a6b703fc",
".git/objects/d8/b571b1cb46dfe6e47ca1e8a343bd99230d96f0": "0e9173a5f58395bd7d593d2e7fdc1901",
".git/objects/db/39eeff73b6b42f22ee5a7fbf0eab983ecf1046": "2fd940c561efcd16c6cf2d39ce603099",
".git/objects/e0/94cf7a28eac668bd98b5cc8ea0af1646cff47a": "3de2ec81c746c2b96fef2137c3e70049",
".git/objects/e4/b39b0642f61d3b8487f3e27471ed283d601adc": "92a59dae95ae973eecc10503fa404dbe",
".git/objects/e6/d1d7307238bbbd8c01073cced9b6f4789421c3": "e045ab76f3caddc1ed07d9b1ed1ae2cc",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/c35daa0649a1e57606e10d59d981ed39180241": "4a93541040932f87c9b8f51457300135",
".git/objects/ed/d3cba9539fa57fe00152155120c97f7ba85533": "d8244cd605a10cfd7384bdf15dce9423",
".git/objects/ed/dc03bf3d585a653754cbfc5ae6839ef88e6b95": "03066fb46aad78c747f7df9511de4606",
".git/objects/ed/f46a3b7da40d1c1e4402ff3eb09b9fa1a3472e": "a5bbc6ac18d871057326b69e44da58d4",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f4/93e8a28c275e107d12730d05436eebf81035b1": "13a88a6d435aa78985ed1cd19fafd6fd",
".git/objects/f8/344880a1a8e716cec5f5974e1fde40889c0649": "3204868069b7f62bb4c6b95e16d9d722",
".git/objects/fd/204ec57069a97fdf5ac3ab3bdc2f672c80c20d": "ec3bc34c7a069981f5d6b76fa2b1454e",
".git/objects/ff/7205e3accf7d136bf285fb925e85129187c45a": "8212f214c1bf059d2b050941fc998ab2",
".git/refs/heads/dev": "06171cf3040bdded406c2a7c85cff0d5",
".git/refs/heads/master": "06171cf3040bdded406c2a7c85cff0d5",
".git/refs/remotes/origin/dev": "06171cf3040bdded406c2a7c85cff0d5",
"android-chrome-192x192.png": "4ed69957143063a4538f6d3a1680e51a",
"android-chrome-512x512.png": "b9b745a6da8db43a9e3875b83839a80b",
"apple-touch-icon.png": "9d4885bd5f33f64ffd7d36f714e18ccf",
"assets/AssetManifest.bin": "52b2ec8fbd702b8368e262afd6d473cd",
"assets/AssetManifest.bin.json": "f682b94d3af9c9cbd10bdd6b7a4888bc",
"assets/AssetManifest.json": "0732f0ebe8204dc7ae651f006707ad0a",
"assets/assets/images/aoshima1.jpg": "5b7ec77432bb3a6f430e3bb6c28bc9e4",
"assets/assets/images/conference_registration_fee.PNG": "c35f306f7bab564dcbdcf3a8e400928f",
"assets/assets/images/matsurihanabi.jpg": "cd26a29be77fadfef08b23245028f0dc",
"assets/assets/images/miyazaki19.jpg": "fdbf4ba188d4aca40e6381a3c7ff3ef9",
"assets/assets/images/miyazaki_202009.jpg": "14a984c96c78f0eb7e70e9a00d094aef",
"assets/assets/images/miyazaki_kentyou_01.jpg": "7aa32d8366a1188896e798b791168b2e",
"assets/assets/images/ms_site_setting-sitelogo_navtop-1872.png": "b263419c13380384b0745b4dafd4d270",
"assets/assets/images/nichinan_202029.jpg": "8ee87b54e5da16655aece3e50ceba974",
"assets/assets/images/NKUST.png": "2228816143979a4fb7029407331770e2",
"assets/assets/images/Osaka%2520Metropolitan%2520University.svg": "54402120e2135a0d830e84fed8a7602b",
"assets/assets/images/PSU_Official_Color.png": "36344bee54d4d1961f926435c71d0030",
"assets/assets/images/Shandong_University_of_Science_and_Technology_logo.png": "f3b65a0291eb6742783821ae66143775",
"assets/assets/images/springer-logo-transparent.png": "bf877eaaadd9a9c04d44c253f853019a",
"assets/assets/images/udojingu_03.jpg": "241192a37a25c6640a9c489d3bf9a2fd",
"assets/assets/images/UOM.png": "82e2cd1947949f0e8ecdcaf7d8136cb7",
"assets/assets/images/Vellore_Institute_of_Technology_seal_2017.png": "9281ce993d11709424cddd4d345f8e19",
"assets/assets/lottie_animation/coming_soon.gif": "6daa2ba15cefffed917eb6dedb58df73",
"assets/assets/pdf/AccesstoMiyazaki.pdf": "7b60d595a60dc8d61d90457baf4cd8a1",
"assets/assets/pdf/CallforPaper.pdf": "e4e0b4c7876fe8fa15fa9839a1fe94b0",
"assets/assets/pdf/ICGEC-2024-IS-CFP-template.docx": "e1cf5605e2f4b8087789b7519138385b",
"assets/assets/pdf/ICGEC-2024-Registration_Form.doc": "eaddf12e6c4ef1586ea4597917db2c71",
"assets/assets/pdf/ICGEC-2024-SS-CFP-template.docx": "da3c9b28c36c72dcc9f8f67fd574fcb9",
"assets/assets/pdf/ICGEC-2024-SS01-CFP.pdf": "f36d22609cecec81f5bd6656dedbafd0",
"assets/assets/pdf/ICGEC-2024-SS02-CFP.pdf": "fa2373cb001b1d139c0cf2eb9b35c913",
"assets/assets/pdf/ICGEC-2024-SS03-CFP.pdf": "0e37e5e0c0d662081c8d00dc06a7eb7c",
"assets/assets/pdf/ICGEC-2024-SS04-CFP.pdf": "6681244084b392d450a1df9aaf4745c8",
"assets/assets/pdf/ICGEC-2024-SS05-CFP.pdf": "2ec0e8e439ccfc5d77de0f9cf03da40f",
"assets/assets/pdf/ICGEC-2024-SS06-CFP.pdf": "5fdfa9b1683df50a55a758257f5b30f3",
"assets/assets/pdf/ICGEC-2024-SS07-CFP.pdf": "95860ee6b6ddf2dd3cac536269180feb",
"assets/assets/pdf/ICGEC-2024-SS08-CFP.pdf": "48b8031d4bef75f5487ae01fbdf142e9",
"assets/assets/pdf/Paper-submission-guideline-for-ICGCE-2024.pdf": "f2b4e6e894fc305b7ffc3d0e870af3c9",
"assets/assets/pdf/Visa-application-form_ICGEC2024.docx": "4dcda269875a1cf1de0d333eabfff82e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "23874a98002e693186d655c05b38c92f",
"assets/NOTICES": "43a95834cfa0fb9fdaffeba9610fd90d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "f2163b9d4e6f1ea52063f498c8878bb9",
"assets/packages/syncfusion_flutter_pdfviewer/assets/highlight.png": "7384946432b51b56b0990dca1a735169",
"assets/packages/syncfusion_flutter_pdfviewer/assets/squiggly.png": "c9602bfd4aa99590ca66ce212099885f",
"assets/packages/syncfusion_flutter_pdfviewer/assets/strikethrough.png": "cb39da11cd936bd01d1c5a911e429799",
"assets/packages/syncfusion_flutter_pdfviewer/assets/underline.png": "c94a4441e753e4744e2857f0c4359bf0",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon-16x16.png": "856327429d9ee555dab8af1e74a0f8ef",
"favicon-32x32.png": "afe4207be0838046e1cd7b37145236d9",
"favicon.ico": "5b37cb3b0841e05a765f52dd03a507cf",
"favicon.png": "6a1ba0fa8ff9641f7220ba8a8f68f4f6",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "cca3a9849eb70a3745e66eaa29cf5495",
"google5fcc2479959944ed.html": "eca43ce9eaff169bbf12f21d662e4bee",
"icons/android-chrome-192x192.png": "4ed69957143063a4538f6d3a1680e51a",
"icons/android-chrome-512x512.png": "b9b745a6da8db43a9e3875b83839a80b",
"icons/apple-touch-icon.png": "9d4885bd5f33f64ffd7d36f714e18ccf",
"icons/favicon-16x16.png": "856327429d9ee555dab8af1e74a0f8ef",
"icons/favicon-32x32.png": "afe4207be0838046e1cd7b37145236d9",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "771ff9729c775538d05a851bacb2e58b",
"/": "771ff9729c775538d05a851bacb2e58b",
"main.dart.js": "db165ec93a401d5fda34d3be3c51a1eb",
"manifest.json": "9dade1e6089f70a04fcafed11e91567a",
"robots.txt": "5a0fae405071279dace671919e34f0be",
"site.webmanifest": "053100cb84a50d2ae7f5492f7dd7f25e",
"sitemap.xml": "330d2ffb78f888d0620d14f56d1eb1ff",
"version.json": "d0ae970d4837dae28bedd048fa5487c1"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
