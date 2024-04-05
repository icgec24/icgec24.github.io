import 'package:flutter/material.dart';
import 'package:flutter_widget_from_html/flutter_widget_from_html.dart';
import 'package:google_fonts/google_fonts.dart';

import '../../widgets/screen_header.dart';
class PaperSubmissionDesktop extends StatelessWidget {
  const PaperSubmissionDesktop({super.key});

  @override
  Widget build(BuildContext context) {
    return Column(children: [
      const ScreenHeader(header: 'Paper Submission'),
      Container(
        padding: EdgeInsets.only(left: 10,right: 10,top: 16),
        width: 1000,
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text("The conferences proceedings will be published in the book series of Lecture Notes in Electrical Engineering by Springer. Normally, papers in this series are indexed by EI and Scopus. If a paper is not presented in the conference, the paper will be excluded from the conference proceedings.\n\nPlease follow the following templates of Springer book series in the preparation of your manuscripts. The paper length is 10 to 12 pages.",style: GoogleFonts.notoSans(fontSize: 16,)),
            const SizedBox(height: 16,),
            HtmlWidget("""<ul>
            <li>LaTeX: <a href='https://icgec24.github.io/assets/assets/data/LaTex_Package.zip'>LaTex Package.zip</a></li>
            <li>Microsoft Word: <a href='https://icgec24.github.io/assets/assets/data/Word_Template.zip'>Word_Template.zip</a> </li>
            </ul>""",textStyle: GoogleFonts.notoSans(fontSize: 16,color: Colors.black),),
          ],),
      ),

    ],);
  }
}
