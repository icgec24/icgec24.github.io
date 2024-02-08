import 'package:carousel_slider/carousel_slider.dart';
import 'package:flutter/material.dart';
import 'package:flutter_svg/svg.dart';
import 'package:get/state_manager.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:icgec_conference/features/conference_news/news_desktop.dart';

import '../../widgets/navigation_bar/navigation_bar.dart';
import '../pdf_view/pdf_view_desktop.dart';
import '../web_view/custom_web_address.dart';

class HomeDesktop extends StatefulWidget {
  const HomeDesktop({super.key});

  @override
  State<HomeDesktop> createState() => _HomeDesktopState();
}

class _HomeDesktopState extends State<HomeDesktop> {
  var page = "ICGEC-2024".obs;
  var previousImage = "r_kodomonokuni_2022_03.jpg".obs;
  var carouselImageList = [
    "udojingu_03.jpg",
    "aoshima1.jpg",
    "matsurihanabi.jpg",
    "miyazaki19.jpg",
    "miyazaki_202009.jpg",
    "miyazaki_kentyou_01.jpg",
    "nichinan_202029.jpg",
    "r_kodomonokuni_2022_03.jpg",
  ];

  @override
  Widget build(BuildContext context) {
    return Row(
      children: [
        SizedBox(
          width: 300,
          child: NavigationBarWidget(
            onTap: changePage,
          ),
        ),
        Obx(() => Visibility(
              visible: page.value == "ICGEC-2024",
              child: Expanded(
                  child: Stack(
                children: [
                 Container(
                        decoration:  BoxDecoration(
                            image: DecorationImage(
                                fit: BoxFit.fill,
                                image: AssetImage(
                                    'assets/images/${previousImage.value}')),
                      )),
                 CarouselSlider.builder(
                      itemCount: carouselImageList.length,
                      itemBuilder: (context, itemIndex, pageViewIndex) {
                        return Container(
                          decoration: BoxDecoration(
                              image: DecorationImage(
                                  fit: BoxFit.fill,
                                  image: AssetImage(
                                      'assets/images/${carouselImageList[itemIndex]}'))),
                        );
                      },
                      options: CarouselOptions(
                        height: MediaQuery.of(context).size.height,
                        // aspectRatio: 16/9,
                        viewportFraction: 1,
                        initialPage: 0,
                        enableInfiniteScroll: true,
                        reverse: false,
                        autoPlay: true,
                        autoPlayInterval: const Duration(seconds: 5),
                        autoPlayAnimationDuration:
                            const Duration(milliseconds: 1000),
                        autoPlayCurve: Curves.easeInOutCirc,
                        enlargeCenterPage: true,
                        enlargeFactor: 1,
                        onPageChanged: (itemIndex,_){
                          // int pageChangeIndex = 0;
                          // if(itemIndex == 0)
                          //    {pageChangeIndex = carouselImageList.length-1;}
                          // else if(itemIndex == carouselImageList.length-1){
                          //   pageChangeIndex=0;
                          // }else{
                          //   pageChangeIndex = itemIndex-1;
                          // }
                          // Future.delayed(const Duration(seconds: 1),(){
                          //   previousImage.value = carouselImageList[pageChangeIndex];
                          // });

                        },
                        scrollDirection: Axis.horizontal,
                      )),
                  Positioned(
                    child: Align(
                      alignment: Alignment.center,
                      child: Container(
                        color: Colors.black87,
                        padding: const EdgeInsets.fromLTRB(30, 20, 30, 20),
                        child: Column(
                          mainAxisAlignment: MainAxisAlignment.spaceBetween,
                          crossAxisAlignment: CrossAxisAlignment.center,
                          mainAxisSize: MainAxisSize.min,
                          children: [
                            Text(
                              'ICGEC-2024',
                              style: GoogleFonts.notoSans(
                                  fontSize: 40,
                                  fontWeight: FontWeight.bold,
                                  color: Colors.white),
                            ),
                            Text('The 16th International Conference On',
                                style: GoogleFonts.arimo(
                                    fontSize: 35,
                                    fontWeight: FontWeight.bold,
                                    color: Colors.white70)),
                            Text(
                              'Genetic and Evolutionary Computing',
                              style: GoogleFonts.arimo(
                                  fontSize: 35,
                                  fontWeight: FontWeight.bold,
                                  color: Colors.white70),
                            ),
                            const SizedBox(
                              height: 10,
                            ),
                            RichText(
                                text: TextSpan(
                                    text: 'August 28-30, 2024, Miyazaki, Japan',
                                   /* children: [
                                      TextSpan(
                                          text: ' (Hybrid)',
                                          style: GoogleFonts.notoSans(
                                              fontSize: 18,
                                              color: Colors.blueAccent))
                                    ],*/
                                    style: GoogleFonts.notoSans(
                                        fontSize: 16, color: Colors.white)))
                          ],
                        ),
                      ),
                    ),
                  ),
                  Positioned(
                    child: Align(
                      alignment: Alignment.bottomCenter,
                      child: Container(
                        color: Colors.white70,
                        //padding: const EdgeInsets.fromLTRB(30, 20, 30, 20),
                        child: Column(
                          mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                          crossAxisAlignment: CrossAxisAlignment.stretch,
                          mainAxisSize: MainAxisSize.min,
                          children: [
                           Row(
                             mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                             children: [
                             Container(child: Image.asset("assets/images/UOM.png",),width:300 ,),
                             Image.asset("assets/images/NKUST.png",width: 150,height: 150,),
                             Image.asset("assets/images/Shandong_University_of_Science_and_Technology_logo.png",width: 140),
                             SvgPicture.asset(
                                 "assets/images/Osaka Metropolitan University.svg",
                                 semanticsLabel: 'Acme Logo',width: 400,
                             ),
                             Image.asset("assets/images/springer-logo-transparent.png",width: 250,)
                           ],)
                          ],
                        ),
                      ),
                    ),
                  ),

                ],
              )),
            )),
        Obx(() => Visibility(
            visible: page.value == "Call for Paper",
            child: const Expanded(child: PdfViewDesktop()))),
        Obx(() => Visibility(
            visible: page.value == "Miyazaki Prefecture",
            child: const Expanded(child: WebViewExample(web_url: 'https://www.kanko-miyazaki.jp/',)))),
        Obx(() => Visibility(
            visible: page.value != "ICGEC-2024" && page.value != "Call for Paper" && page.value != "Miyazaki Prefecture",
            child: const Expanded(child: NewsDesktop())))
      ],
    );
  }

  void changePage(pageName) {
    page.value = pageName;
  }
}
