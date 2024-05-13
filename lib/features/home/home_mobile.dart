import 'dart:async';

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:get/state_manager.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:icgec_conference/features/conference_news/news_desktop.dart';
import 'package:icgec_conference/features/importance_date/importance_date_desktop.dart';
import 'package:icgec_conference/features/invited_session/invited_session_desktop.dart';
import 'package:icgec_conference/features/organizing_committee/organizing_committee_desktop.dart';
import 'package:icgec_conference/features/recommended_accommodation/recommended_accommodation_desktop.dart';
import 'package:pointer_interceptor/pointer_interceptor.dart';
import 'package:url_launcher/url_launcher.dart';

import '../../widgets/navigation_bar/navigation_bar.dart';
import '../conference_registration/conference_registration_desktop.dart';
import '../contact_us/contact_us_desktop.dart';
import '../galleries/galleries_desktop.dart';
import '../paper_submission/paper_submission_desktop.dart';
import '../pdf_view/pdf_view_desktop.dart';
import 'package:universal_html/html.dart' as html;

import '../visa_application/visa_application_desktop.dart';

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
      drawer: Obx(
              () {
            if(page.value case ("Call for Paper"||"Access to Miyazaki")) {
              return PointerInterceptor(
                child: Drawer(
                  child: NavigationBarWidget(
                    onTap: changePage,
                  ),
                ),
              );
            }else{
              return  Drawer(
                child: NavigationBarWidget(
                  onTap: changePage,
                ),
              );
            }
          }
      ),
      body: Column(
        children: [
          Obx(() =>
              mainPage(page.value)),
        ],
      ),
    );
  }
  Widget mainPage(pageName)
  {
    switch(pageName)
    {
      case "Call for Paper":
        return const Expanded(child: PdfViewDesktop(pdfFileName: "CallforPaper.pdf",));
      case "Access to Miyazaki":
        return const Expanded(child: PdfViewDesktop(pdfFileName: "AccesstoMiyazaki.pdf",));
      case "Important Dates":
        return const Expanded(child: ImportanceDateDesktop());
      case "News":
        return const Expanded(child: NewsDesktop());
      case "Galleries":
        return const Expanded(child: GalleriesDesktop());
      case "Organizing Committee":
        return const Expanded(child: OrganizingCommitteeDesktop());
      case "Keynote Speech":
        return const Expanded(child: GalleriesDesktop());
      case "Invited Sessions":
        return const Expanded(child: InvitedSessionDesktop());
      case "Paper Submission":
        return const Expanded(child: PaperSubmissionDesktop());
      case "Accepted Paper":
        return const Expanded(child: GalleriesDesktop());
      case "Final Manuscript":
        return const Expanded(child: GalleriesDesktop());
      case "Conference Registration":
        return const Expanded(child: ConferenceRegistrationDesktop());
      case  "Conference Program":
        return const Expanded(child: GalleriesDesktop());
      case   "Conference Venue":
        return const Expanded(child: GalleriesDesktop());
      case  "Recommended Accommodation":
        return const Expanded(child: RecommendedAccommodationDesktop());
      case  "Visa Application":
        return const Expanded(child: VisaApplicationDesktop());
      case  "Contact us":
        return const Expanded(child: ContactUsDesktop());
    }
    return  Expanded(
        child: Stack(
          children: [
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
                          'August 28-29, 2024, Miyazaki, Japan',
                          style: GoogleFonts.notoSans(
                              fontSize: 14, color: Colors.white),
                        ),
                      ),
                    ],
                  ),
                ),
              ),
            ),
            // Positioned(
            //   child: Align(
            //     alignment: Alignment.bottomCenter,
            //     child: Container(
            //       color: Colors.white60,
            //       padding: const EdgeInsets.only(bottom: 10),
            //       child: Column(
            //         mainAxisAlignment: MainAxisAlignment.spaceEvenly,
            //         crossAxisAlignment: CrossAxisAlignment.stretch,
            //         mainAxisSize: MainAxisSize.min,
            //         children: [
            //           Row(
            //             mainAxisAlignment: MainAxisAlignment
            //                 .spaceEvenly,
            //             children: [
            //               SizedBox(
            //                 width: 200,
            //                 child: Image.asset(
            //                   "assets/images/UOM.png",
            //                 ),
            //               ),
            //               Image.asset(
            //                 "assets/images/NKUST.png",
            //                 width: 70,
            //                 height: 70,
            //               ),
            //               Image.asset(
            //                   "assets/images/Shandong_University_of_Science_and_Technology_logo.png",
            //                   width: 70),
            //             ],
            //           ),
            //           const SizedBox(height: 10,),
            //           Row(
            //             mainAxisAlignment: MainAxisAlignment
            //                 .spaceEvenly,
            //             children: [
            //               Image.asset(
            //                   "assets/images/PSU_Official_Color.png",
            //                   width: 80),
            //               Image.asset(
            //                   "assets/images/Vellore_Institute_of_Technology_seal_2017.png",
            //                   width: 60),
            //               Image.asset(
            //                 "assets/images/springer-logo-transparent.png",
            //                 width: 180,
            //               ),
            //             ],
            //           )
            //         ],
            //       ),
            //     ),
            //   ),
            // ),
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
                        mainAxisAlignment: MainAxisAlignment
                            .spaceEvenly,
                        children: [
                          Expanded(
                            flex: 5,
                            child: SizedBox(
                              height: 100,
                              child: Image.asset(
                                  "assets/images/UOM.png",
                                  width: 60),
                            ),
                          ),
                          // const CircleAvatar(
                          //   radius: 65,
                          //   foregroundImage: AssetImage(
                          //     "assets/images/miyazaki_prefecture.jpeg",),
                          // ),
                          const SizedBox(width: 10,),
                          Expanded(
                            flex: 2,
                            child: SizedBox(
                              height: 100,
                              child: Image.asset(
                                  "assets/images/NKUST.png",
                                  width: 60),
                            ),
                          ),
                          const SizedBox(width: 10,),
                          Expanded(
                            flex: 2,
                            child: SizedBox(
                              height: 100,
                              child: Image.asset(
                                  "assets/images/Shandong_University_of_Science_and_Technology_logo.png",
                                  width: 60),
                            ),
                          ),
                          const SizedBox(width: 10,),
                          // Expanded(
                          //   flex: 2,
                          //   child: SizedBox(
                          //     height: 120,
                          //     child: Image.asset(
                          //         "assets/images/PSU_Official_Color.png",
                          //         width: 60),
                          //   ),
                          // ),
                          // Expanded(
                          //   flex: 2,
                          //   child: SizedBox(
                          //     height: 100,
                          //     child: Image.asset(
                          //         "assets/images/Vellore_Institute_of_Technology_seal_2017.png",
                          //         width: 60),
                          //   ),
                          // ),
                          Expanded(
                            flex: 5,
                            child: Image.asset(
                              "assets/images/springer-logo-transparent.png",
                              width: 250,
                            ),
                          ),
                        ],
                      )
                    ],
                  ),
                ),
              ),
            ),
          ],
        ));
  }
  void changePage(pageName) {
    switch (pageName) {
      // case "Call for Paper":
      //   showPdf('CallForPaper.pdf');
      //   page.value = "ICGEC-2024";
      //   break;
      // case "Access to Miyazaki":
      //   showPdf('AccessToMiyazaki.pdf');
      //   page.value = "ICGEC-2024";
      //   break;
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
