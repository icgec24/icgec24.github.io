'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"android-chrome-192x192.png": "4ed69957143063a4538f6d3a1680e51a",
"android-chrome-512x512.png": "b9b745a6da8db43a9e3875b83839a80b",
"apple-touch-icon.png": "9d4885bd5f33f64ffd7d36f714e18ccf",
"assets/AssetManifest.bin": "5246b235b1f47cc6ef92895aabf47f59",
"assets/AssetManifest.bin.json": "6978da863446fd50628e96e3fe605384",
"assets/AssetManifest.json": "05c6ab8fb49b00d1708e7fa7c43f67c5",
"assets/assets/datas/LaTex_Package.zip": "1da76a0e29eebe12bf8c44fcabe55823",
"assets/assets/datas/sitemap.xml": "330d2ffb78f888d0620d14f56d1eb1ff",
"assets/assets/datas/Word_Template.zip": "3f5cf55d4bc99bde2c366aa64b74f515",
"assets/assets/galleries/IMG_3997.jpg": "a08464bca8843ce54508943f41d7765c",
"assets/assets/galleries/IMG_4003.jpg": "33e2438ee37e7888b005b78c9f656715",
"assets/assets/galleries/IMG_4017.jpg": "47bb52bfe6b7aa7fe83896baf6761866",
"assets/assets/galleries/IMG_4026.jpg": "d86efc4600bc2c999b1e1aa7f4bdf7b3",
"assets/assets/galleries/IMG_4033.jpg": "f3b5d235f367f50c248cf40d5ebd226c",
"assets/assets/galleries/IMG_4035.jpg": "4fff69f33fa4e4083584247ca536d6a8",
"assets/assets/galleries/IMG_4052.jpg": "617bd3e068ed463abb29daacf0a7ed3c",
"assets/assets/galleries/IMG_4063.jpg": "6b980033b503097c6a7ad5949ab6d5cc",
"assets/assets/galleries/IMG_4065.jpg": "cc8ea64066fb95a1ba1244c1007554ad",
"assets/assets/galleries/IMG_4069.jpg": "3b576d7ae838e028e6223a13e9d29e32",
"assets/assets/galleries/IMG_4072.jpg": "826b941387033b9d956c64f50a172309",
"assets/assets/galleries/IMG_4080.jpg": "a48a28dc31b05e29a7482fd7f8fbce37",
"assets/assets/galleries/IMG_4084.jpg": "78f02b02721c4d6f1534a2f5ce879b91",
"assets/assets/galleries/IMG_4086.jpg": "3417f7db227913d06879e7b8f75de42f",
"assets/assets/galleries/IMG_4088.jpg": "cd23cab230e3c240b69e4d262993a813",
"assets/assets/galleries/LINE_ALBUM_ICGEC%2520PHOTOS_240916_10.jpg": "32bd27de14709dd3d812906f084d10a4",
"assets/assets/galleries/LINE_ALBUM_ICGEC%2520PHOTOS_240916_105.jpg": "4a6be0a864e4768cf39039425fcf41d5",
"assets/assets/galleries/LINE_ALBUM_ICGEC%2520PHOTOS_240916_109.jpg": "e74d563a13df6e65bae1bb955f5da165",
"assets/assets/galleries/LINE_ALBUM_ICGEC%2520PHOTOS_240916_110.jpg": "ff8691dd4fe55383d8b7fbe15b46f7b6",
"assets/assets/galleries/LINE_ALBUM_ICGEC%2520PHOTOS_240916_112.jpg": "cab38a26f9a88aa3d5b142530b0d8f4f",
"assets/assets/galleries/LINE_ALBUM_ICGEC%2520PHOTOS_240916_139.jpg": "f2ada4daf7c7b0ab018c15ccf42724fa",
"assets/assets/galleries/LINE_ALBUM_ICGEC%2520PHOTOS_240916_140.jpg": "422e244ce6cb9306fe964b96f287125d",
"assets/assets/galleries/LINE_ALBUM_ICGEC%2520PHOTOS_240916_15.jpg": "d88367d64b2fd785d150d20a7f911d66",
"assets/assets/galleries/LINE_ALBUM_ICGEC%2520PHOTOS_240916_151.jpg": "f8360af041009fe9c3d59a62745d5f6c",
"assets/assets/galleries/LINE_ALBUM_ICGEC%2520PHOTOS_240916_153.jpg": "6edbbb7a878b87d6cdb9880c87d21611",
"assets/assets/galleries/LINE_ALBUM_ICGEC%2520PHOTOS_240916_154.jpg": "dd705a4cc3d9ab86d564463111f61bc2",
"assets/assets/galleries/LINE_ALBUM_ICGEC%2520PHOTOS_240916_156.jpg": "95ff9530d742dcddf04b8a1cfa6da82d",
"assets/assets/galleries/LINE_ALBUM_ICGEC%2520PHOTOS_240916_159.jpg": "efafedee7696c334b9d8c7004498bab3",
"assets/assets/galleries/LINE_ALBUM_ICGEC%2520PHOTOS_240916_160.jpg": "83c38a9b20b7ff77cdbc26b00c415cdf",
"assets/assets/galleries/LINE_ALBUM_ICGEC%2520PHOTOS_240916_161.jpg": "9debcd7a3d36f774dce8146c132bede7",
"assets/assets/galleries/LINE_ALBUM_ICGEC%2520PHOTOS_240916_162.jpg": "e140defe2c571c22f4024a8eb4cf213b",
"assets/assets/galleries/LINE_ALBUM_ICGEC%2520PHOTOS_240916_163.jpg": "e2ed6326a7d87861093388d95a124455",
"assets/assets/galleries/LINE_ALBUM_ICGEC%2520PHOTOS_240916_164.jpg": "e72de31e5834e1927ab119f7d8c625f5",
"assets/assets/galleries/LINE_ALBUM_ICGEC%2520PHOTOS_240916_165.jpg": "4a45cd6370304c88b3c6dcb78f58496d",
"assets/assets/galleries/LINE_ALBUM_ICGEC%2520PHOTOS_240916_167.jpg": "e257383b5ac74cb856deaf341d4f4bf9",
"assets/assets/galleries/LINE_ALBUM_ICGEC%2520PHOTOS_240916_168.jpg": "ea8947a737d448643e146d8b529867b9",
"assets/assets/galleries/LINE_ALBUM_ICGEC%2520PHOTOS_240916_182.jpg": "659b391e60de20424d70ae665af289f6",
"assets/assets/galleries/LINE_ALBUM_ICGEC%2520PHOTOS_240916_183.jpg": "fa1d239a3b4460234eb3004363aa954e",
"assets/assets/galleries/LINE_ALBUM_ICGEC%2520PHOTOS_240916_191.jpg": "643c4a0771585953cbc8592b65d46de5",
"assets/assets/galleries/LINE_ALBUM_ICGEC%2520PHOTOS_240916_192.jpg": "77a2750455cf16a4aa5a7263a20da40b",
"assets/assets/galleries/LINE_ALBUM_ICGEC%2520PHOTOS_240916_196.jpg": "418167ef82f975d3ab9663dac4e7295f",
"assets/assets/galleries/LINE_ALBUM_ICGEC%2520PHOTOS_240916_198.jpg": "89395b2c53d973b46bfee9a64c7171c5",
"assets/assets/galleries/LINE_ALBUM_ICGEC%2520PHOTOS_240916_199.jpg": "90a2c723c61f73a4bf1cbca62f41248e",
"assets/assets/galleries/LINE_ALBUM_ICGEC%2520PHOTOS_240916_20.jpg": "fcf36c4ae731092cbf7dfe27a82bb11d",
"assets/assets/galleries/LINE_ALBUM_ICGEC%2520PHOTOS_240916_200.jpg": "69493e02711662cbe6192047b9d891e8",
"assets/assets/galleries/LINE_ALBUM_ICGEC%2520PHOTOS_240916_203.jpg": "ca47ab2fea4f4bff4e7bc40f27b7bd58",
"assets/assets/galleries/LINE_ALBUM_ICGEC%2520PHOTOS_240916_207.jpg": "9493f973f57f1fe261b13443931ab0c7",
"assets/assets/galleries/LINE_ALBUM_ICGEC%2520PHOTOS_240916_208.jpg": "bf243fa9c9c6e8f8c7548050328f1bb7",
"assets/assets/galleries/LINE_ALBUM_ICGEC%2520PHOTOS_240916_209.jpg": "7cd40aed7a5789feedba43a2a4a7ecbc",
"assets/assets/galleries/LINE_ALBUM_ICGEC%2520PHOTOS_240916_210.jpg": "5aebc1395386ed52489e4ee6434b34db",
"assets/assets/galleries/LINE_ALBUM_ICGEC%2520PHOTOS_240916_212.jpg": "9d137e90467db49f55306d353aa109ca",
"assets/assets/galleries/LINE_ALBUM_ICGEC%2520PHOTOS_240916_216.jpg": "08db8996570767e96c596df588b804ab",
"assets/assets/galleries/LINE_ALBUM_ICGEC%2520PHOTOS_240916_222.jpg": "73a8a78af18b9a3e3dd88cdb9b04ff39",
"assets/assets/galleries/LINE_ALBUM_ICGEC%2520PHOTOS_240916_224.jpg": "bb5a20c00869d95e0b987f9c76cfc820",
"assets/assets/galleries/LINE_ALBUM_ICGEC%2520PHOTOS_240916_228.jpg": "f92dd7737777f9b4170e7968c48dfbc0",
"assets/assets/galleries/LINE_ALBUM_ICGEC%2520PHOTOS_240916_233.jpg": "c7b1c5ebaa0935b3467fb211f418e892",
"assets/assets/galleries/LINE_ALBUM_ICGEC%2520PHOTOS_240916_236.jpg": "06376e4c0dbda3d65f78a3941444fb6b",
"assets/assets/galleries/LINE_ALBUM_ICGEC%2520PHOTOS_240916_238.jpg": "243ff0dd38443145c41798270ba7a849",
"assets/assets/galleries/LINE_ALBUM_ICGEC%2520PHOTOS_240916_240.jpg": "6b81cb7bd581bc43b0d10953e4e81816",
"assets/assets/galleries/LINE_ALBUM_ICGEC%2520PHOTOS_240916_242.jpg": "e4d94163b08000e1a40c26506e5fcb91",
"assets/assets/galleries/LINE_ALBUM_ICGEC%2520PHOTOS_240916_243.jpg": "2e64b2f7b8157ccce3e9567beebca0e9",
"assets/assets/galleries/LINE_ALBUM_ICGEC%2520PHOTOS_240916_25.jpg": "1f95c45196cab4e7c3da57a5ecfbc0a7",
"assets/assets/galleries/LINE_ALBUM_ICGEC%2520PHOTOS_240916_269.jpg": "11b921b0743ac9ba40fccfb64111a638",
"assets/assets/galleries/LINE_ALBUM_ICGEC%2520PHOTOS_240916_270.jpg": "93bc63a9bff799b9453d4328bf352a6d",
"assets/assets/galleries/LINE_ALBUM_ICGEC%2520PHOTOS_240916_273.jpg": "b42fb10552b21523fbaf382a2d4698da",
"assets/assets/galleries/LINE_ALBUM_ICGEC%2520PHOTOS_240916_274.jpg": "ded937f0770a9dbb17f8c64a46207107",
"assets/assets/galleries/LINE_ALBUM_ICGEC%2520PHOTOS_240916_277.jpg": "441155ecc256f63c2b04cf5bcba0e5ba",
"assets/assets/galleries/LINE_ALBUM_ICGEC%2520PHOTOS_240916_278.jpg": "dd2151b571511cc519fc762a938c301f",
"assets/assets/galleries/LINE_ALBUM_ICGEC%2520PHOTOS_240916_279.jpg": "371edadf31b3c0d9f5238c27c0cc8f5b",
"assets/assets/galleries/LINE_ALBUM_ICGEC%2520PHOTOS_240916_29.jpg": "fed3669a4873a038ce1df41b9c6a000b",
"assets/assets/galleries/LINE_ALBUM_ICGEC%2520PHOTOS_240916_3.jpg": "d86c681272189d834d9bb4e620b21b46",
"assets/assets/galleries/LINE_ALBUM_ICGEC%2520PHOTOS_240916_303.jpg": "551302d8e1aab731ff5c948b906f86a6",
"assets/assets/galleries/LINE_ALBUM_ICGEC%2520PHOTOS_240916_307.jpg": "5fca747ff268f5fed41aed5d9d7b995a",
"assets/assets/galleries/LINE_ALBUM_ICGEC%2520PHOTOS_240916_310.jpg": "2a0846631f4c56c3dc5c372cc0c03eb8",
"assets/assets/galleries/LINE_ALBUM_ICGEC%2520PHOTOS_240916_311.jpg": "2e08962226c98fbae9841e31a9c62227",
"assets/assets/galleries/LINE_ALBUM_ICGEC%2520PHOTOS_240916_316.jpg": "900edd61aaf6bbf8da69f3d74118ea3a",
"assets/assets/galleries/LINE_ALBUM_ICGEC%2520PHOTOS_240916_320.jpg": "44688a023951510a738f73bfcfc4d550",
"assets/assets/galleries/LINE_ALBUM_ICGEC%2520PHOTOS_240916_321.jpg": "03f6cfa46a897f0a5b3fd860e1866b9d",
"assets/assets/galleries/LINE_ALBUM_ICGEC%2520PHOTOS_240916_322.jpg": "fa28994bcd41ac5ba33950c1e414e8fc",
"assets/assets/galleries/LINE_ALBUM_ICGEC%2520PHOTOS_240916_331.jpg": "dfe6580f63848a12563987a3d1042f07",
"assets/assets/galleries/LINE_ALBUM_ICGEC%2520PHOTOS_240916_4.jpg": "89686b23619d0427f7f3c554b238b9f4",
"assets/assets/galleries/LINE_ALBUM_ICGEC%2520PHOTOS_240916_40.jpg": "ae1b62e29d3531e4685e2dbb53cc76e5",
"assets/assets/galleries/LINE_ALBUM_ICGEC%2520PHOTOS_240916_6.jpg": "2b23e192d6052a170627aca2dfe9329c",
"assets/assets/galleries/LINE_ALBUM_ICGEC%2520PHOTOS_240916_65.jpg": "d338e4f44d982bdef40d83f07a7dcc63",
"assets/assets/galleries/LINE_ALBUM_ICGEC%2520PHOTOS_240916_70.jpg": "2493c0cfd460cde3a8f3d862406a9d34",
"assets/assets/galleries/LINE_ALBUM_ICGEC%2520PHOTOS_240916_72.jpg": "146a4a94a8814cfde3670497476c1307",
"assets/assets/galleries/LINE_ALBUM_ICGEC%2520PHOTOS_240916_75.jpg": "15597004faf66d3d4833ff4cf0654a97",
"assets/assets/galleries/LINE_ALBUM_ICGEC%2520PHOTOS_240916_76.jpg": "c41e829ae3120a0b49e96f322dbbb15d",
"assets/assets/galleries/LINE_ALBUM_ICGEC%2520PHOTOS_240916_84.jpg": "7409765f1ab40a211cb7918618006ab4",
"assets/assets/galleries/LINE_ALBUM_ICGEC%2520PHOTOS_240916_86.jpg": "5adc56468373272bb415157f83f3ad1b",
"assets/assets/galleries/LINE_ALBUM_ICGEC%2520PHOTOS_240916_87.jpg": "9f1cfe7e25a68b4f38b360ad4e81a75f",
"assets/assets/galleries/LINE_ALBUM_ICGEC%2520PHOTOS_240916_88.jpg": "1a6b302313f478545e3013105b127bea",
"assets/assets/galleries/LINE_ALBUM_ICGEC%2520PHOTOS_240916_9.jpg": "34c821f4fb9f203e59e832c3b220ce46",
"assets/assets/galleries/LINE_ALBUM_ICGEC%2520PHOTOS_240916_95.jpg": "76981450e40f186017f9d28162b77419",
"assets/assets/galleries/LINE_ALBUM_ICGEC%2520PHOTOS_240916_97.jpg": "fccf92f177e81ea59d374169509dcdce",
"assets/assets/images/aoshima1.jpg": "5b7ec77432bb3a6f430e3bb6c28bc9e4",
"assets/assets/images/conference_registration_fee.PNG": "dc01c4d11385e38f92c71b4a29c01d0f",
"assets/assets/images/jeng_shyang_pan.jpg": "75e3403f1c3baa1198506af86c1bd1ba",
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
"assets/assets/images/tsuyomu_ikenoue.png": "5ce3c11750c2c2923fa57023db426161",
"assets/assets/images/udojingu_03.jpg": "241192a37a25c6640a9c489d3bf9a2fd",
"assets/assets/images/UOM.png": "82e2cd1947949f0e8ecdcaf7d8136cb7",
"assets/assets/images/Vellore_Institute_of_Technology_seal_2017.png": "9281ce993d11709424cddd4d345f8e19",
"assets/assets/lottie_animation/coming_soon.gif": "6daa2ba15cefffed917eb6dedb58df73",
"assets/assets/pdf/AccesstoMiyazaki.pdf": "7b60d595a60dc8d61d90457baf4cd8a1",
"assets/assets/pdf/access_conference_venue.pdf": "8fc59db70f45402dc47546d830e2a925",
"assets/assets/pdf/CallforPaper.pdf": "ab75ad7e9a1343a72a7d2ff9587f4c7f",
"assets/assets/pdf/Conference_Excursion.pdf": "6bb25e1f2f09f0bf23a7a6290158fcca",
"assets/assets/pdf/ICGEC-2024-Copyright_Form.docx": "463f8bd7b89a7e21834404799c7b4cb2",
"assets/assets/pdf/ICGEC-2024-IS-CFP-template.docx": "e1cf5605e2f4b8087789b7519138385b",
"assets/assets/pdf/ICGEC-2024-Registration_Form.doc": "ac8507483f4cc915b34ef273b6054010",
"assets/assets/pdf/ICGEC-2024-SS-CFP-template.docx": "da3c9b28c36c72dcc9f8f67fd574fcb9",
"assets/assets/pdf/ICGEC-2024-SS01-CFP.pdf": "2172e085145920ef7570b4bbfc544913",
"assets/assets/pdf/ICGEC-2024-SS02-CFP.pdf": "dc31b852ac2a53e6e18379aeccd5417c",
"assets/assets/pdf/ICGEC-2024-SS03-CFP.pdf": "50498927617693ea95a6a202e90f7073",
"assets/assets/pdf/ICGEC-2024-SS04-CFP.pdf": "e06c4f90938f406ce386450b9aaeec82",
"assets/assets/pdf/ICGEC-2024-SS05-CFP.pdf": "27cc6051b29ed3cfad588c7474ca7134",
"assets/assets/pdf/ICGEC-2024-SS06-CFP.pdf": "dceaddbf4f90f7ab4fb2c51022295f9e",
"assets/assets/pdf/ICGEC-2024-SS07-CFP.pdf": "7d6e1a77ad5cc68ed068ed0ce326b053",
"assets/assets/pdf/ICGEC-2024-SS08-CFP.pdf": "1efc64ea2fe7429bc7214ecc5eec73ca",
"assets/assets/pdf/ICGEC-2024-SS09-CFP.pdf": "c07d69a4ccbe6be296de605a3afcd902",
"assets/assets/pdf/ICGEC2024_Accepted_Paper.pdf": "3a6ed5a6fb2c7529569f314257ad0d05",
"assets/assets/pdf/ICGEC2024_Conference_Program.pdf": "e68cab1796507485acc57ee13f1b9d9a",
"assets/assets/pdf/Paper-submission-guideline-for-ICGCE-2024.pdf": "f2b4e6e894fc305b7ffc3d0e870af3c9",
"assets/assets/pdf/poster-template-ICGEC2024.pptx": "08f95ef39f07409a811fef175621a3cd",
"assets/assets/pdf/Visa-application-form_ICGEC2024.docx": "4dcda269875a1cf1de0d333eabfff82e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "173a5e8aa90072ea3392257082e1a291",
"assets/NOTICES": "ee0af422ec8d9b97ce257d998d8b9bbc",
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
"flutter_bootstrap.js": "7decaa5db0b6d1d4351b21a5619a43d3",
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
"main.dart.js": "8d330745a4b94167b89922ecf1f44fac",
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
