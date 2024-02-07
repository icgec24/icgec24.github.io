import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:icgec_conference/features/conference_news/news_desktop.dart';

import '../../widgets/navigation_bar/navigation_bar.dart';
import '../pdf_view/pdf_view_desktop.dart';

class HomeDesktop extends StatefulWidget {
  const HomeDesktop({super.key});

  @override
  State<HomeDesktop> createState() => _HomeDesktopState();
}

class _HomeDesktopState extends State<HomeDesktop> {
  String page = "ICGEC-2024";
  @override
  Widget build(BuildContext context) {
    return Row(
      children: [
        SizedBox(width: 300,child: NavigationBarWidget(onTap: changePage,),),
        Visibility(
          visible: page == "ICGEC-2024",
          child: Expanded(child: Stack(
            children: [
              Container(
                  decoration: const BoxDecoration(
                    image: DecorationImage(fit:BoxFit.fill,image: AssetImage('assets/images/udojingu_03.jpg'))
                  ),
                 ),
              Positioned(
                child: Align(
                  alignment: Alignment.center,
                  child: Container(
                    color: Colors.black54,
                    padding: EdgeInsets.fromLTRB(30, 20, 30, 20),
                    child: Column(
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      crossAxisAlignment: CrossAxisAlignment.center,
                      mainAxisSize: MainAxisSize.min,
                      children: [
                        Text('ICGEC-2024',style: GoogleFonts.notoSans(fontSize: 40,fontWeight: FontWeight.bold,color: Colors.white),),
                        Text('The 16th International Conference On',style:GoogleFonts.arimo(fontSize: 35,fontWeight: FontWeight.normal,color: Colors.white70)),
                        Text('Genetic and Evolutionary Computing',style: GoogleFonts.arimo(fontSize: 35,fontWeight: FontWeight.normal,color: Colors.white70),),
                        SizedBox(height: 10,),
                        RichText(text: TextSpan(text: 'August 28-30, 2024, Miyazaki, Japan',children: [
                          TextSpan(text: ' (Hybrid)',style: GoogleFonts.notoSans(fontSize: 18,color:Colors.blueAccent))
                        ],style: GoogleFonts.notoSans(fontSize: 16,color:Colors.white)))
                      ],
                    ),
                  ),
                ),
              )
            ],
          )),
        ),
        Visibility(
            visible: page == "Call for Paper",
            child: Expanded(child: PdfViewDesktop())),
        Visibility(
             visible: page !="ICGEC-2024" && page != "Call for Paper",
            child: Expanded(child: NewsDesktop()))
      ],
    );
  }
  VoidCallback? changePage(pageName){
    setState(() {
      page = pageName;
    });
  }
}
