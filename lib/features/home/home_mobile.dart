import 'dart:async';

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:get/state_manager.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:icgec_conference/features/conference_news/news_desktop.dart';
import 'package:icgec_conference/features/importance_date/importance_date_desktop.dart';
import 'package:icgec_conference/features/recommended_accommodation/recommended_accommodation_desktop.dart';
import 'package:url_launcher/url_launcher.dart';

import '../../widgets/navigation_bar/navigation_bar.dart';
import '../galleries/galleries_desktop.dart';
import '../pdf_view/pdf_view_desktop.dart';
import '../web_view/custom_web_address.dart';
import 'package:universal_html/html.dart' as html;

class HomeMobile extends StatefulWidget {
  const HomeMobile({super.key});

  @override
  State<HomeMobile> createState() => _HomeMobileState();
}

class _HomeMobileState extends State<HomeMobile> {
  var page = "ICGEC-2024".obs;
  var previousImage = 0.obs;
  var nextImage = 0.obs;
  var visible = true.obs;
  var carouselImageList = [
    "udojingu_03.jpg",
    "aoshima1.jpg",
    "matsurihanabi.jpg",
    "miyazaki19.jpg",
    "miyazaki_202009.jpg",
    "miyazaki_kentyou_01.jpg",
    "nichinan_202029.jpg",
  ];

  @override
  void initState() {
    super.initState();
    Timer.periodic(const Duration(seconds: 6), (timer) {
      visible.value = !visible.value;
      if (!visible.value) {
        Future.delayed(const Duration(milliseconds: 3000), () {
          if (nextImage.value < carouselImageList.length - 3) {
            nextImage.value = nextImage.value + 1;
          } else {
            nextImage.value = 0;
          }
        });
      } else {
        Future.delayed(const Duration(milliseconds: 3000), () {
          previousImage.value = nextImage.value + 2;
        });
      }
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        centerTitle: true,
        title: const Text(
          'ICGEC-2024',
          style: TextStyle(color: Colors.white),
        ),
        backgroundColor: Colors.black87,
        iconTheme: const IconThemeData(color: Colors.white),
      ),
      drawer: Drawer(
        child:  NavigationBarWidget(
          onTap: changePage,
        ),
      ),
      body: Column(
        children: [
          Visibility(
           visible: false,
            child: NavigationBarWidget(
              onTap: changePage,
            ),
          ),
          Obx(() =>
              Visibility(
                visible: page.value == "ICGEC-2024",
                child: Expanded(
                    child: Stack(
                      children: [
                        // Container(
                        //     decoration: BoxDecoration(
                        //   image: DecorationImage(
                        //       fit: BoxFit.fill,
                        //       image:
                        //           AssetImage('assets/images/${nextImage.value}')),
                        // )),
                        // ImageFade(
                        //   image: AssetImage('assets/images/${carouselImageList[nextImage.value]}'),
                        //   // slow-ish fade for loaded images:
                        //   duration: const Duration(milliseconds: 7000),
                        //
                        //   // if the image is loaded synchronously (ex. from memory), fade in faster:
                        //   syncDuration: const Duration(milliseconds: 3000),
                        //   fit: BoxFit.fitWidth,
                        //  curve: Curves.easeInToLinear,
                        //  width: MediaQuery.of(context).size.width,
                        // ),
                        Container(
                          decoration: BoxDecoration(
                              image: DecorationImage(
                                  fit: BoxFit.fill,
                                  image: AssetImage(
                                      'assets/images/${carouselImageList[previousImage
                                          .value]}'))),
                        ),
                        AnimatedOpacity(
                          opacity: visible.value ? 1.0 : 0.0,
                          duration: const Duration(milliseconds: 3000),
                          // The green box must be a child of the AnimatedOpacity widget.
                          child: Container(
                            decoration: BoxDecoration(
                                image: DecorationImage(
                                    fit: BoxFit.fill,
                                    image: AssetImage(
                                        'assets/images/${carouselImageList[nextImage
                                            .value]}'))),
                          ),
                        ),

                        // FadeInImage(placeholder: AssetImage('assets/images/${carouselImageList[nextImage.value]}'), image: AssetImage('assets/images/${carouselImageList[nextImage.value]}'),
                        //   fit: BoxFit.fill,width: MediaQuery.of(context).size.width,
                        //   fadeInDuration: const Duration(milliseconds: 5000),
                        //   fadeOutDuration: const Duration(milliseconds: 5000),
                        // ),
                        /*CarouselSlider.builder(
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
                            //   nextImage.value = carouselImageList[pageChangeIndex];
                            // });

                          },
                          scrollDirection: Axis.horizontal,
                        )),*/
                        Positioned(
                          child: Align(
                            alignment: Alignment.center,
                            child: Container(
                              color: Colors.black87,
                              margin: const EdgeInsets.only(left: 30,right: 30),
                              padding: const EdgeInsets.fromLTRB(20, 20, 20, 20),
                              child: Column(
                                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                                crossAxisAlignment: CrossAxisAlignment.center,
                                mainAxisSize: MainAxisSize.min,
                                children: [
                                  Text(
                                    'ICGEC-2024',
                                    style: GoogleFonts.notoSans(
                                        fontSize: 24,
                                        fontWeight: FontWeight.bold,
                                        color: Colors.white),
                                  ),
                                  FittedBox(
                                    child: Text('The 16th International Conference On',
                                        style: GoogleFonts.arimo(
                                            fontSize: 18,
                                            fontWeight: FontWeight.bold,
                                            color: Colors.white70)),
                                  ),
                                  FittedBox(
                                    child: Text(
                                      'Genetic and Evolutionary Computing',
                                      style: GoogleFonts.arimo(
                                          fontSize: 18,
                                          fontWeight: FontWeight.bold,
                                          color: Colors.white70),
                                    ),
                                  ),
                                  const SizedBox(
                                    height: 10,
                                  ),
                                  FittedBox(
                                    child: Text(
                                      'August 28-30, 2024, Miyazaki, Japan',
                                      style: GoogleFonts.notoSans(
                                          fontSize: 14, color: Colors.white),
                                    ),
                                  ),
                                ],
                              ),
                            ),
                          ),
                        ),
                        Positioned(
                          child: Align(
                            alignment: Alignment.bottomCenter,
                            child: Container(
                              color: Colors.white60,
                              padding: const EdgeInsets.only(bottom: 10),
                              child: Column(
                                mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                                crossAxisAlignment: CrossAxisAlignment.stretch,
                                mainAxisSize: MainAxisSize.min,
                                children: [
                                  Row(
                                    mainAxisAlignment: MainAxisAlignment
                                        .spaceEvenly,
                                    children: [
                                      SizedBox(
                                        width: 200,
                                        child: Image.asset(
                                          "assets/images/UOM.png",
                                        ),
                                      ),
                                      Image.asset(
                                        "assets/images/NKUST.png",
                                        width: 70,
                                        height: 70,
                                      ),
                                      Image.asset(
                                          "assets/images/Shandong_University_of_Science_and_Technology_logo.png",
                                          width: 70),
                                    ],
                                  ),
                                  const SizedBox(height: 10,),
                                  Row(
                                    mainAxisAlignment: MainAxisAlignment
                                        .spaceEvenly,
                                    children: [
                                      Image.asset(
                                          "assets/images/PSU_Official_Color.png",
                                          width: 80),
                                      Image.asset(
                                          "assets/images/Vellore_Institute_of_Technology_seal_2017.png",
                                          width: 60),
                                      Image.asset(
                                        "assets/images/springer-logo-transparent.png",
                                        width: 180,
                                      ),
                                    ],
                                  )
                                ],
                              ),
                            ),
                          ),
                        ),
                      ],
                    )),
              )),
          Obx(() =>
              Visibility(
                  visible: page.value == "Call for Paper",
                  child: const Expanded(child: PdfViewDesktop()))),
          Obx(() =>
              Visibility(
                  visible: page.value == "Important Dates",
                  child: const Expanded(child: ImportanceDateDesktop()))),
          Obx(() =>
              Visibility(
                  visible: page.value == "Miyazaki Prefecture",
                  child: const Expanded(
                      child: WebViewExample(
                        web_url: 'https://www.omu.ac.jp/en/',
                      )))),
          Obx(() =>
              Visibility(
                  visible: page.value == "News",
                  child: const Expanded(child: NewsDesktop()))),
          Obx(() =>
              Visibility(
                  visible: page.value == "Galleries",
                  child: const Expanded(child: GalleriesDesktop()))),
          Obx(() =>
              Visibility(
                  visible: page.value == "Organizing Committee",
                  child: const Expanded(child: GalleriesDesktop()))),
          Obx(() =>
              Visibility(
                  visible: page.value == "Keynote Speech",
                  child: const Expanded(child: GalleriesDesktop()))),
          Obx(() =>
              Visibility(
                  visible: page.value == "Invited Sessions",
                  child: const Expanded(child: GalleriesDesktop()))),
          Obx(() =>
              Visibility(
                  visible: page.value == "Paper Submission",
                  child: const Expanded(child: GalleriesDesktop()))),
          Obx(() =>
              Visibility(
                  visible: page.value == "Accepted Paper",
                  child: const Expanded(child: GalleriesDesktop()))),
          Obx(() =>
              Visibility(
                  visible: page.value == "Final Manuscript",
                  child: const Expanded(child: GalleriesDesktop()))),
          Obx(() =>
              Visibility(
                  visible: page.value == "Conference Registration",
                  child: const Expanded(child: GalleriesDesktop()))),
          Obx(() =>
              Visibility(
                  visible: page.value == "Conference Program",
                  child: const Expanded(child: GalleriesDesktop()))),
          Obx(() =>
              Visibility(
                  visible: page.value == "Conference Venue",
                  child: const Expanded(child: GalleriesDesktop()))),
          Obx(() =>
              Visibility(
                  visible: page.value == "Recommended Accommodation",
                  child: const Expanded(
                      child: RecommendedAccommodationDesktop()))),
        ],
      ),
    );
  }

  void changePage(pageName) {
    switch (pageName) {
      case "Call for Paper":
        showPdf('CallForPaper.pdf');
        page.value = "ICGEC-2024";
        break;
      case "Access to Miyazaki":
        showPdf('AccessToMiyazaki.pdf');
        page.value = "ICGEC-2024";
        break;
      case "Miyazaki Information":
        final Uri url = Uri.parse('https://www.kanko-miyazaki.jp/');
        _launchUrl(url);
        page.value = "ICGEC-2024";
        break;
      default:
        page.value = pageName;
    }
    Navigator.pop(context);
  }

  Future<void> showPdf(String fileName) async {
    var bytes = await rootBundle
        .load("assets/pdf/$fileName"); // location of your asset file

    final blob = html.Blob([bytes], 'application/pdf');
    final url = html.Url.createObjectUrlFromBlob(blob);
    html.window.open(url, "_blank");
    html.Url.revokeObjectUrl(url);
  }

  Future<void> _launchUrl(url) async {
    await launchUrl(url);
  }
}
