'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "f5e4a69114ddeaba8053e6021b18d2d4",
".git/config": "242b10b486c63c74e6c7542ebd3755cc",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "bd0f898f40c133242dabef2d313ef49a",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
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
".git/index": "d318d5fb1f265b4a9a07d5b061d05f72",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "9eba35a40b00637bbd5f4f53ab7d1d59",
".git/logs/refs/heads/main": "2bc8d73c0ef90f42f54db3b5a9595489",
".git/logs/refs/remotes/origin/main": "77215bd3a2d343d765f6a167b58cca13",
".git/objects/01/11206137dbf48b9f3317e4bf672e445a5808c2": "2062ce7ed51529524d6ee0461b8fd542",
".git/objects/04/5113eaa714dc121f8f1520f1b8628a82774021": "3ed5109cd27cd7c2fbe9f66291a64085",
".git/objects/04/db02ceaa256d2b9d9bef55c4bf32c5a4370c72": "5028adfa69ac5f9a0d1411ef7431fe6d",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/05/c71934671a3352a32d8b6be0c56eb4ee868909": "7cc536977aa79074f772d01aae9d897c",
".git/objects/07/615b8d23746768d308cbcaa0c59f33704c64a0": "6afc4eefd04b99561e684b0994cd3698",
".git/objects/09/e58bbcd8279cb9c6aee7c19275dbd5ec3e9538": "117d041b4a67a50241baffab3d521773",
".git/objects/0a/6fb3865ab956db2bee76b860f0776f263d1747": "469796cfd44c99d75c8d6d629c62fdc2",
".git/objects/0b/0f493ed1df2eabd62b0c93593499a1ae2ddb44": "0e56a7f7da942237881e2da5b085b250",
".git/objects/0c/da453ae71f4b2b2df8c7a61206521d47a6cce4": "f11b330249bc8d9083b9127e81e46cc6",
".git/objects/0d/846c8d4e47a645a373889c8b2c499152924140": "7f8f3bbf2e35701a64b33210abfe6443",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/15/ce4ccce6c41c4b3e1ba1c0a13f5db1fae05d28": "9f528c13329ec183fd8bfe2cf69a28c2",
".git/objects/16/44f7d9dcd9b34dbf95d48e8c9659c716289f46": "ab1f8f635fc6a26aabb12ef91e54259e",
".git/objects/17/29a7a83cf6878ff98bbdf3e6e5caba73cd2b62": "6b8733d05ba155206d4877864b9acef2",
".git/objects/17/6845de2cc86506f160ab95fffd3654025ff52d": "d9c8922ee545d20773eabc0d1199b4e2",
".git/objects/1a/7d38f8cc2b45266dff2f62ce601ddf469c5505": "d5f71419d5c771fe1d498d3c47712ec3",
".git/objects/1b/71598783c4aa355f4b3cf3461093075dfb768a": "c1cacdebc6939c9f211629b829b9dca5",
".git/objects/1b/f662e80d9b344de1921cacf5594e7cb186dd81": "edebae00a794b670c5e02ad63abb8e92",
".git/objects/1d/578a84d71b095c4e68a2df33790e456f686e7c": "b803fa01206bf8dbe3e80ed6803f4d54",
".git/objects/1f/7cd2844a6befa775a8bc02efcf46f147da31ad": "9b5e60f5842b974c731a5f0bd129ab69",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/33c310e7b546a1d7fa0ae2da48111d462ce6fd": "298d883f54ca4bbd6f70636bf1a23a4b",
".git/objects/22/5cc4373ff4e2ee0b4311dcfa050efe677156f3": "e330b2a8902967e994ef9e709c8a809e",
".git/objects/22/9054022842c5f309c8efc692f2ba1130bb511d": "57930ae53b7c819b38be32b9ac7f9fe2",
".git/objects/23/da877303c5b3a60996f00cf20714af2bdeb2f4": "755d9187229bfc7e0d889ba7ec49cd48",
".git/objects/25/0b12df5f2c2ad5658bc448af2b6749169a78c0": "5198b2fbb60ab62b5f68017b2ac8f758",
".git/objects/26/44f09e2533bc23895e7eb29eda7ce287230468": "8b3d32c1ab9bfa6ebf7eee393bcd5b9b",
".git/objects/27/9d74c0f6c4c801d9af11abc66afa3c822ef443": "ca9632570087cbd9305d55d123738666",
".git/objects/27/c4074a256ead1c78e86f98bd3c68894704021f": "841140fb2b3f4377dcdc3795ca0b2556",
".git/objects/29/2ecd057671d606cb7e1b5569ae5d626b4478c3": "caa417646b98d56ae038bd589591c3ba",
".git/objects/2b/2d632fcfbb17c678fb3ea152d9bf4a8e095f76": "de88c19f17ee10595657f29fc816b5cd",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/2c/48a5f2b7e56e95ef27fff1093ad8c0ee3d8742": "0ee55252048ab18ae827e27c58d5c671",
".git/objects/2d/49b93da62aca0228b28e3d49b6a2f20c739ba5": "385cc6969f01088c136fe8ea11b62034",
".git/objects/2f/eda500a3b449f383472a85697ec2e11bbd8936": "3594e8a10ab85cc417e79d039ac40405",
".git/objects/30/5260f70862d5cd43e27e543ea5cdba828133a1": "4359d2c3c1fa986a19a03118e8294657",
".git/objects/31/7057c055aab38eb063814c0396d5ebd2e37da4": "e9f14eb37f06e2122de9ddc841d65aa3",
".git/objects/32/1ddfbd3c35e4097058fadbfabd1f9e512b7011": "3970020573795288a466cc69c51a37d4",
".git/objects/33/7d142a5a15d34071a01842119103bd844279c3": "3f257d7c48c604a5c8cbe2dc910db735",
".git/objects/34/9d31608c5aab5f79ffbb0c68c6dee49976e8ad": "fb64e126f3c06301ea77c4dbb6697f29",
".git/objects/36/e4033ca44056efd1d7f1c1859d98fcf67bbdfa": "72e7c08998b9a9e5877b07f47f83d36a",
".git/objects/38/c51c7f9d3bef59d292072f974faa57819d407d": "ba38c8f7bf0e8e90930a3ffd06b015b5",
".git/objects/3a/7795ce82e55d8f9c99e7beaa0c85141f8d2835": "8a5558c663d87709cb2353c1b35642f0",
".git/objects/3a/fe120cd443ed854b2207d5927bfc55be40e73a": "87dc7af1eb790fe944ee427a4083c545",
".git/objects/3e/4628d107af85e3972d15a8e990e2ade76d3072": "af9e6820e2daa04d907f6899b642b52e",
".git/objects/42/24bc9203bdb75f5c8ed7144d7e0dc58e3c9ca2": "00dfe31ed195dc7c7f2d6833b41445e1",
".git/objects/42/855fb18f66eb48ec1ff050aea6713dc34c8d12": "1944693216bce7500c01db80f4ceba33",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/46/1b03043bc686efe77a9146c0de660a2fb95bbf": "c2492f5a881f73daacda1b8c95d55f02",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/bc64d040240d4d0415de2baae55b8d08c45daa": "219aa42e91a03ae742df953e7330de1d",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/49/03f9c8fcd7fa995e9d47cf06e8e49b12a2b571": "9bc00627e647474822e1a922680e9777",
".git/objects/49/502b1251bd4d6a304e6f0668ddc06ab3520d6e": "d042cefc53600da7e4a30555098f2d92",
".git/objects/49/9d0bb8e94625b6567b39d5bce0d3dc706420bb": "2e65a328aa4076a82be5d45615c8a3f1",
".git/objects/4d/1f6d232dae002b8900f0b749391726da9843b2": "55f6219c2d865e55402c72e8a64ff42a",
".git/objects/4f/4d691c2ae4b5fd83b7dad4e009e39ec0a0e76b": "77a6171945eddb0cc991ed82d7c35ab8",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/50/fa9fc88a3dfb00c30afcd10f98a9ba8cf9f366": "e664b2e61fb61266833494433b394c57",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/53/bc029451008784ea63ecc68a40d2db66d8c8ee": "02ce4af5748786beefef68eaacd20d4a",
".git/objects/54/e93ded59204acdfbe192b0655a641ba7fc877c": "f1eff2797a673f63da36848c830dfc3a",
".git/objects/55/7c9a1f12497a3a1d36e1108406021a550ffe15": "346d991956471c4faf0db4926beed5a8",
".git/objects/56/7df95be198ae46cf674f9436f3a0b863bab13c": "148a407ed4cc78fcd509a5c677e33f95",
".git/objects/57/003c546e2d4c54c16e3f8d6bdc7ba0cbca21f6": "8e37a15cb82543b8a14828dcc6e65edb",
".git/objects/58/9b00b6a8562f15737a07cf99b0ba1bd2e2bf31": "7240e14be285965a230b6063dd73118c",
".git/objects/59/3913567d765cd96edcdb39dbf4190b8ba96dbd": "964d74db133b2d02cb0bf430d49fceab",
".git/objects/5e/05e25a36119060ddcf9d32c2c92833b23ea2de": "4db8d082dd8515a711164e5de902d7e0",
".git/objects/60/d599dd05b3df64214fe20e2cd989ce1db374ab": "3a8de94fb41e5d25be3893e2710728ee",
".git/objects/60/de103088bfe9d24d793a40711b53c5e0207677": "a5184acc94d19f66efb1b8fc2e3e29a5",
".git/objects/61/85294a5909b555b09aefd239d5af11a7d49fb5": "15429d18f36bdb23238b83f4cd15fa84",
".git/objects/63/70caffb4ed724cd64d3acea12b304613137ce3": "c6dd46551d20f29d9eed5e17239144fd",
".git/objects/63/c2d15ef46bcf96ca3b5cd88e45057862d82bf3": "aafcc6872c09f624e400ad3ff9f11d87",
".git/objects/65/39ef3d8611de27a72204db8651bdf8295b58bb": "00210d1fd91d59b4c93f295da2611d2e",
".git/objects/65/6c977f4d625f5f94bd5c10a83f5ffcc579a2a9": "85822473801df1a32a675fa4a9f236ec",
".git/objects/66/1c59e5540addf1f1e8baf350f82db6ad7732c3": "90debd35e2731a9855e929a3b315767e",
".git/objects/66/8c651a190d143364e5fb4ca25155a5fd6a53e8": "223e790aea4077953c92e1383d52eadb",
".git/objects/67/12857220a30c671d782b726398f58aeb80c58b": "2d58cd863dfb4273fc6c8cddaef4a441",
".git/objects/67/40bc1a7176a9e5b1eb83efa17d69bcedd89167": "90145883dbb4eac945525d1676e35b7c",
".git/objects/68/4ebd569fbeb890b1d8d3ce73cfdf3bb4d78022": "5426d825b86be5392670df2e71e30aa0",
".git/objects/69/b708dff377084f2aacfec8cbe172e439f5334b": "02c27afd7acda6e328c25cb84797e80d",
".git/objects/6b/61bd8aba8db2937b95f75ec6315fbd35331363": "a6c3fb55b74704a99bc49863d63f82b7",
".git/objects/6b/fa12343c80171187c95b7e18e2d18208b975a0": "a9352373475c48b6a6c411bce877989b",
".git/objects/6d/f44dcc30ac8d1e981ce484be58fec590b67835": "e9068b7eb4833adcda45422b3489d6df",
".git/objects/6f/00b32086aa750c2ef50dfe05e0aa3ff0fdb62f": "6ec251d1770a87b299a94017223fcc79",
".git/objects/6f/cfd2c2ff99c52c5e7fccfc4516d3bbef225a4a": "41e46c4a0b5539c4fb6ece6112509ca9",
".git/objects/6f/ef69dd0719ad0d16963ffde989ce9b1f18cad1": "b9c2c612a03504802d03921ecd74bb33",
".git/objects/70/72fd05db9d3bdd920585cd9c24491d8697be9d": "cfb58451ccb06a2d5696bba5f7ec39c8",
".git/objects/71/f95a499a6c9af033e7a24cd4f2df7f8c8cb290": "40aa58aaf7ff8158c7985d4fb162d46e",
".git/objects/72/7c3cb721dd33abd674a8f166628de3f7617646": "f9e1694120b51f1cd6c02d79fc667ab7",
".git/objects/73/1784620f82bfff07ffe582100405b4aab5f884": "47e496c81441da5d85098facf2c417d7",
".git/objects/73/3aecb5a63daaafaf8fbb9d1ab3d84059a987da": "92879e05d800225b27b45fe988dbaaf2",
".git/objects/73/41edf4014d595679cb3e46eb5887e479f0f4c4": "ce7d94b375ae18ffbd66e652863fc201",
".git/objects/74/73230fef61dd4e7a985cf228a56fddedb92ee7": "c14606000a9822b8b23edb988bd712c8",
".git/objects/77/bc1c4d7a06c1c79cb6c08683d6c36da8e85072": "f27d7a1269f3025d9d00835c6ee47227",
".git/objects/78/5ddc3e58be3892be7a6e63e9f27375a18b0b49": "f63806c9287b248ac1d56a89936bfeb8",
".git/objects/78/d24c829de6b4bf563a2211d0a663c355f864ce": "094d4cebe97dadb15ff2b733a1922111",
".git/objects/7a/0a8b6ca970765c38e3a5e03f0c99d3fa881b10": "8b69fb0d87d81e2636e03d2073c64b76",
".git/objects/7a/57d75f87e3269a7d961247a544ea281c461cf3": "d0cf2244f80a470836486b08818297f8",
".git/objects/7d/043ba4a6dac3e54688ef20a7aac45a024be976": "e2775d80ce14d936b94f578d39e4ce18",
".git/objects/7d/100c16b1d986aaf5df660dd1c63763a3e62faf": "acee2e0b724e241becfe3879e1ca1c25",
".git/objects/7d/a8785009e26163cde0e3730a3a960b5c649e05": "87f69df889acb73f1786056131b6c71f",
".git/objects/82/f2a5028db88b6208619af490fd44f9d722f9a1": "6d4516d9179dc1222b8823bf3aba5a2c",
".git/objects/82/f74dd2edf8303fde29ef60a4af9d20a32bf020": "4178dabcb6f97cd9dbf1b89ee5daa188",
".git/objects/85/3cc3d5c0b60311eefcb392de648fe80b9cddc6": "a5150e1bd37c45c23d2c3750bab5c19b",
".git/objects/85/9e58e1fafa04cd0df2818aa356547f6fa96dd5": "484614b2079dc2b2c6ca5678182c658f",
".git/objects/86/352e967ffbd2d252768bcaf142d91864c64562": "bd455eafb66848af046a9793cdc9175a",
".git/objects/87/d04a9cf916fe04f4d9b802d762abc996d64109": "7ead6f9df154c59f38a2472d885094a8",
".git/objects/88/46cb0a5941d8f752e743c7c2d908dce5cd2a55": "e27bc9a3a8f9b4c80c7fb8d5fd232c7c",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/6a71622d017f9fa5817a4fd971a62db4fea12b": "9d730925f51fde6a1dc4cf937c94806f",
".git/objects/89/7c34a57ff86c4a9541a8aad081c15605d8ddf3": "fa8c3045ce75cc39089178ce2588ef8c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/d2ed60654a781846858cedfc31482dde5a3d96": "62432a2286ceb3d5a0643107da600479",
".git/objects/8d/2bebc2a32588b0be567192142f375faf9dc494": "3cf29c6d0b90d4c0184a08c873297602",
".git/objects/8d/8f417ff2b42f09d1d4aebbec2cab21650c188f": "839bc75fd375a9281e248b1f37a022a9",
".git/objects/8d/a482349df073758b1ca15bf08d9cba2b71b1a2": "efe79f7e05c065eaaa026b5eec65ee5a",
".git/objects/90/b2557a0f515633dc5030fc167c4927b658d70e": "83a782f13b02dd8bb70a8aa468542675",
".git/objects/92/d36e5f5aeaeebd3d16a343864c10e139f7c969": "72c33a8ea85aecd27b896f45119979cb",
".git/objects/93/2e5776934a61b371281927f624a4acd4ba2401": "38f30169c4942e15b6bc51f929009e7c",
".git/objects/94/101eb9e04d838d63cc47f7789086135ffd5ef0": "62664f5a79dc34102b61e5fdc31116f9",
".git/objects/94/a14809720716bda4f21fda7b6f0d98b0a5e97d": "38db694da6bd3dbe7a6b4dedd694c610",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/95/eef67c5c51ae268d8373100c27c40b2d997fe3": "6aec8692e68ae308aa750d042a70383d",
".git/objects/97/b6eee463de5e4fcf79c6570e4173f50eca81d5": "b58977ec52e0607f13c5710fd432ef21",
".git/objects/98/a9d9295e4c4c11e9ea061dffd67326c6dd95aa": "223bf15e41c04744f476395faa9a1d8e",
".git/objects/98/ea08872c89f674470a26f9815576aabd2080d3": "d8fc92ee9b80d602a89d104f97bae417",
".git/objects/9d/26c10738a463b4006d928d26a576f765b9dd18": "fed04ea132b52ba9da61aa554150a001",
".git/objects/9e/1961e7a1ec53f9943f26718d96023ca42baf5d": "538c47e52b8c117daf0e64a7baa5a242",
".git/objects/a3/049f87e2c97459114771754580af4a307ca7e5": "d643cf69725b4fd3b0faa64eecf5a672",
".git/objects/a3/803f1282f1f9914723531275954d360bee28e2": "7b421c8559f589b0b0a1eb6f48995d10",
".git/objects/a4/c9b3c5025af7574018bb450ad5afcf068ef81e": "f841e0f63f10e452b425ae1d2a590533",
".git/objects/a6/bf55b05a09343abe9314c34734af72decfade8": "fea9745c84cdc235e7964c0b96ccd898",
".git/objects/a7/5aa1a9b2a733b5e942dbec3cbd19cebbc4b4dd": "5adea1dad8f399d648908024535b60f6",
".git/objects/a9/6ffb7aba62c3fbfd34814b56e2ebed2c5d613b": "4d0eddbf4d612dd04d5b5dcc00888d38",
".git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "b73a35563fa129bd884d8b5c53ee9231",
".git/objects/ab/bc77870d316fa624375cf5835dac228e8085e9": "06e68b830003b118af1d17e9fec887a5",
".git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "4add97a99941aa0e9eed0f2173416ade",
".git/objects/ad/33fd9858fb5ae577c37605d17cc41602cdc48a": "bfac3b4cd71a20b31f5c9969464d9952",
".git/objects/ae/574655b63a29ff673da1eeaed8c010bcf2e030": "b99579d9a5e3d21f36e7c1172fe871ad",
".git/objects/ae/7b62a1d955fd20d14ee6794102f0d6277620b8": "c858903f6315647048495d81a235b143",
".git/objects/af/85be646f983b7214f50dffed5c3afb3c1d2247": "bd32ef1f9d1c1db1e43a5895dd80f81a",
".git/objects/b3/40931a5611b9162f99dfb2dc76ca2d17856568": "54031b673b1ee0977986af5f964ae9c8",
".git/objects/b6/c77346181f3ac4b877a58f18f4cd3bef6deec1": "50a34641fed4b67744da71fdcf0ec95d",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/bd/660f85599e4a531d6fe80ee17037b6ffdd07d0": "1f87a847167ec79b8eb44123aebedc56",
".git/objects/be/6f8966cc18ec4639308c3f2ee4fd09eaf76931": "c967f4ff6e96e861393d0f9e082396b6",
".git/objects/be/d29071b9bf46db39db623547c09eea06958a96": "887572a0fb1144757511bba6563c54e3",
".git/objects/c0/957b3b77f000074e86489a00b52fefb2484de3": "94591574384a99e0d5149f2efe2c1c25",
".git/objects/c1/34b3d4bd056081f1eba02909c9553d9c2fbeff": "b36826ef0e4de23d287fe4fef6da7005",
".git/objects/c1/e2669a48937df29e07f56105b6b8b67257905b": "16188010205ee38bcc0ecb4e14c59635",
".git/objects/c2/5329329ca40353d1d75f143b53d74ecca7a788": "53649c1f1edfb36680f5ea985f7ddc20",
".git/objects/c3/54dc69f5dd0675f157ec54126a5242978040f4": "41e3f31c6707527ca55473e257666cb7",
".git/objects/c6/2f4b2b6eb18bfc00ebfed14bafe4c99211a559": "12a1aef1d6254248a17fefdbc6ba2496",
".git/objects/c7/0f142f0d44bb7a8a576e279f6cf44123b1f328": "e16329ed7e0826f37a2f147db24d1b81",
".git/objects/cc/717a9ba424f30ddc28cea00704eb05973f4f96": "74f84d7f1703823297561d74287fa8c7",
".git/objects/cc/eb4f906572a4c63e3fae2650f33333bbec5788": "7439e8ea4b2f8ea43a8c72b5b19cf588",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "ad5b6117df489509af208438785f208b",
".git/objects/cd/3f4f323d093c5dab443ff6e179ed24b37b1be2": "c5535ab2aaffa1ccc8d9a0f7fc5dbe97",
".git/objects/cd/9afc5d2a55762146aee6f547622dbd93c6a863": "5a8c75cc626be60751013c686c4a514c",
".git/objects/d0/99b781a7ffb3b6cbe8bb4fe44eae9fc5674105": "2b8c7325192b20b128894305964dcbc7",
".git/objects/d0/f1a6d0303958c6e74438b179ec647e38571554": "993583cea1113485f119d714073bb208",
".git/objects/d2/0865882ab43063af1bddd9def110f93d76682f": "d21f8111e48bffa958d19f88e6a8f858",
".git/objects/d4/4f538b95c9acc2cc078e6d393cbd319b4dd6f7": "0f438b940c0f2e4b131e19efa267fcfd",
".git/objects/d4/ef60648d739d20adbd2caebbe59415678f9f03": "276093d02fa1482750fa5845935d2761",
".git/objects/d5/17207ff5ab7678872ae26e9dff22f57e20c6c6": "03a8c83fb7e9638784d98e7b47e14f57",
".git/objects/d6/400c05df1665f307027fb0417ef90ce3389c61": "8388866f49f5e6be984691b0e578413d",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d8/02be25611ee9e568f9960f20c4eff1ed9e2430": "165d108dfb2a25183f9f7f97a7bba1a5",
".git/objects/d8/67121f44ad0e2cc47e71fe6711e05b6b4ce492": "cd0c095e3072d4c2f5e91343a6b703fc",
".git/objects/db/43ceb228728206965c7e50e010f8d5a7376f8e": "9f04db519adc8a6ff925eb93435de76e",
".git/objects/db/8c445c2b21a416ca1dfa3a68d26fa165ce1850": "6cb2b36ce902b17239450e340f6ebcd7",
".git/objects/db/f0c49bb2078e13c9254d306b5f9f5ab6bf4901": "a9988e89a73af641134607ba7708ca63",
".git/objects/dc/eac67847216ef753835d3ef848645b3f9f24fb": "69f2f9b841f6e67fa8d7f638555a4c59",
".git/objects/dd/31de6a783efa19a7df1cb4baadda4980b2a8cd": "42e269d83000d286b3a96b60aaa5c83e",
".git/objects/dd/650034fb4d7fb952acaca216aeefa8d185dcbb": "24851014c016708c93b613744c716505",
".git/objects/dd/b7f06bcf6eef676bcd570aa8456638e2a1d222": "77ec99cc4d8074a3c09cd072065554e6",
".git/objects/de/38fcc2b8c0d4f0f73004f33afa603c1eb94d08": "e69a3e9bf7586fac40a2e1b0f7ede864",
".git/objects/e0/94cf7a28eac668bd98b5cc8ea0af1646cff47a": "3de2ec81c746c2b96fef2137c3e70049",
".git/objects/e0/c3af421279b0ba8a718c8be48aa1cce450d961": "1962ec581294c3462bbb3b41822f47ac",
".git/objects/e1/500d67973b7f416716a0adb81d6ca614e2cd2b": "c294e185d0e2a1bd2d4136ad8b5c2289",
".git/objects/e5/82dc4d86fe2da5fe406ea544e17ca511e772e6": "c0f0954e8bb2e2176a3d126af405e3d4",
".git/objects/e5/adef1d0a3636d97d6081010752e0e0083fe0a1": "4cfec3f64c0472922bef95daca5a6c5d",
".git/objects/e6/a169d7516772fccb4b44f904b6ad1a990d3b18": "d67cc54dd54fdec9e8a0944d164ffad7",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e6/d1d7307238bbbd8c01073cced9b6f4789421c3": "e045ab76f3caddc1ed07d9b1ed1ae2cc",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/39cc6e42328704c06b744e5361146479f62b93": "f8d510c205e0f7c275114508cfb0978f",
".git/objects/f4/5b533415783cc252b4af138fd00a704a8c2ad3": "6657e74d6a7bf310f13d2ade362add84",
".git/objects/f4/8e49e0beba9a6a760e565cc849ed5f1f483b00": "c0ef2d78d2bbdc8262dd4d055bc46d79",
".git/objects/f5/f914cfbda4c3cac73f43858842deb0e7de5310": "e6a47308dacd9fa969573f43966f6cec",
".git/objects/f6/1bad7820ba7f7e3d095e8b0dfc6596bdfb26dc": "2dc40de51ec426cc251b71a8d4b0d599",
".git/objects/f8/344880a1a8e716cec5f5974e1fde40889c0649": "3204868069b7f62bb4c6b95e16d9d722",
".git/objects/f8/deb409d449b19eb78ef0ace3d905cefc84582a": "b746400ab2b169f5a149579aaa40dd29",
".git/objects/fb/191056623a163349d921e717efaf271b72ccf9": "2352e6d4b302d9578bf6aa899088d755",
".git/objects/fc/c7da3aa71ea37a92490e0bf150230f7b398e8f": "0e7dbfccbe9d307b6348bb4f47fcfc4c",
".git/objects/fd/204ec57069a97fdf5ac3ab3bdc2f672c80c20d": "ec3bc34c7a069981f5d6b76fa2b1454e",
".git/objects/fd/4163742ef30329a5f09e42740abd1606cfebc9": "7bd592c63b85d4dd42faa7a71d15188d",
".git/objects/ff/7205e3accf7d136bf285fb925e85129187c45a": "8212f214c1bf059d2b050941fc998ab2",
".git/objects/ff/76a5460de681e66fe184de62a8793360e09c38": "7eded3a15383f64bee1ae8834e8ccc00",
".git/objects/ff/99e2197883df2fdbcf1d03bcc31515ceb4490f": "e6163ed8867fb514ca35d4d2a6db684f",
".git/ORIG_HEAD": "97dcfe489c7c9b135169fab1a007efbf",
".git/refs/heads/main": "7ca85c628a74f65d5dc239bd6261f27c",
".git/refs/remotes/origin/main": "f914ea6912e3c5c7358cd2e9654924f0",
"assets/AssetManifest.bin": "7348e4fd6111eedc2617cd13540e0849",
"assets/AssetManifest.bin.json": "45b19a5e0284de4c6da67f82728bee50",
"assets/AssetManifest.json": "c6137db59523c2bf6a70ce4a3127a51e",
"assets/assets/images/aoshima1.jpg": "5b7ec77432bb3a6f430e3bb6c28bc9e4",
"assets/assets/images/matsurihanabi.jpg": "cd26a29be77fadfef08b23245028f0dc",
"assets/assets/images/miyazaki19.jpg": "fdbf4ba188d4aca40e6381a3c7ff3ef9",
"assets/assets/images/miyazaki_202009.jpg": "14a984c96c78f0eb7e70e9a00d094aef",
"assets/assets/images/miyazaki_kentyou_01.jpg": "7aa32d8366a1188896e798b791168b2e",
"assets/assets/images/ms_site_setting-sitelogo_navtop-1872.png": "b263419c13380384b0745b4dafd4d270",
"assets/assets/images/nichinan_202029.jpg": "8ee87b54e5da16655aece3e50ceba974",
"assets/assets/images/NKUST.png": "2228816143979a4fb7029407331770e2",
"assets/assets/images/Osaka%2520Metropolitan%2520University.svg": "8dcbb9481e62d4bad5ef81fbce1a01f9",
"assets/assets/images/PSU_Official_Color.png": "36344bee54d4d1961f926435c71d0030",
"assets/assets/images/Shandong_University_of_Science_and_Technology_logo.png": "f3b65a0291eb6742783821ae66143775",
"assets/assets/images/springer-logo-transparent.png": "bf877eaaadd9a9c04d44c253f853019a",
"assets/assets/images/udojingu_03.jpg": "241192a37a25c6640a9c489d3bf9a2fd",
"assets/assets/images/UOM.png": "82e2cd1947949f0e8ecdcaf7d8136cb7",
"assets/assets/images/Vellore_Institute_of_Technology_seal_2017.png": "9281ce993d11709424cddd4d345f8e19",
"assets/assets/pdf/AccessToMiyazaki.pdf": "f8652d98cd5846969b0fe0083b362d3d",
"assets/assets/pdf/CallforPaper.pdf": "f3ea0fb3e4b0e29f5f3b344f8b159606",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "1aad4bca442b239cde99b624fc47e23c",
"assets/NOTICES": "a177d46508f971fd9635a0abc8d4fa19",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "f2163b9d4e6f1ea52063f498c8878bb9",
"assets/packages/syncfusion_flutter_pdfviewer/assets/highlight.png": "7384946432b51b56b0990dca1a735169",
"assets/packages/syncfusion_flutter_pdfviewer/assets/squiggly.png": "c9602bfd4aa99590ca66ce212099885f",
"assets/packages/syncfusion_flutter_pdfviewer/assets/strikethrough.png": "cb39da11cd936bd01d1c5a911e429799",
"assets/packages/syncfusion_flutter_pdfviewer/assets/underline.png": "c94a4441e753e4744e2857f0c4359bf0",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "a12bf0f5f872b0aab4244a9c47e78d67",
"/": "a12bf0f5f872b0aab4244a9c47e78d67",
"main.dart.js": "38615af36ac2df72097cb76c80e18230",
"manifest.json": "e843167973bcba28b8acda3dd282038b",
"version.json": "d0ae970d4837dae28bedd048fa5487c1"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
