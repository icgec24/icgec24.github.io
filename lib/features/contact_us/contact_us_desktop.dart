import 'package:flutter/material.dart';
import 'package:flutter_widget_from_html/flutter_widget_from_html.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:icgec_conference/widgets/screen_header.dart';

class ContactUsDesktop extends StatelessWidget {
  const ContactUsDesktop({super.key});

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 20),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          const ScreenHeader(header: "Contact Us",),
        Container(
          color: const Color(0xff195973),
          padding: const EdgeInsets.symmetric(vertical: 3,horizontal: 10),
          margin: const EdgeInsets.symmetric(vertical: 10),
          child:  Text('Conference websites',style: GoogleFonts.notoSans(fontSize: 25,color: Colors.white),),),
        HtmlWidget("""<ul>
              <li><a href='https://icgec24.github.io' target='_self'>https://icgec24.github.io</a></li>
              </ul>""",textStyle: GoogleFonts.notoSans(fontSize: 16,color: Colors.black),),
        Container(
          color: const Color(0xff053a40),
          padding: const EdgeInsets.symmetric(vertical: 3,horizontal: 10),
          margin: const EdgeInsets.symmetric(vertical: 10),
          child:  Text('Conference emails',style: GoogleFonts.notoSans(fontSize: 25,color: Colors.white),),),
        HtmlWidget("""<ul>
              <li><a href='mailto:icgec24@gmail.com'>icgec24@gmail.com</a></li>
              </ul>""",textStyle: GoogleFonts.notoSans(fontSize: 16,color: Colors.black),),
      ],),
    );
  }
}
