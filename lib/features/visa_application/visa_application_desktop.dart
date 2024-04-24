import 'package:flutter/material.dart';
import 'package:flutter_widget_from_html/flutter_widget_from_html.dart';
import 'package:google_fonts/google_fonts.dart';

import '../../widgets/screen_header.dart';

class VisaApplicationDesktop extends StatelessWidget {
  const VisaApplicationDesktop({super.key});

  @override
  Widget build(BuildContext context) {
    return Column(children: [
      const ScreenHeader(header: 'visa application'),
      Container(
        padding: const EdgeInsets.only(left: 10,right: 10,top: 16),
        width: 1000,
        child: HtmlWidget('''
               If you need the visa application documents, please contact to the conference email
              <a href='mailto:icgec24@gmail.com'>icgec24@gmail.com</a>.
              ''',textStyle: GoogleFonts.notoSans(fontSize: 16,color: Colors.black),),
      ),
            const SizedBox(height: 16,),
          ],);
  }
}
