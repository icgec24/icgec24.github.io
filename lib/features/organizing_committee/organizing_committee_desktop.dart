import 'package:flutter/material.dart';
import 'package:flutter_widget_from_html/flutter_widget_from_html.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:icgec_conference/widgets/screen_header.dart';

class OrganizingCommitteeDesktop extends StatelessWidget {
  const OrganizingCommitteeDesktop({super.key});

  @override
  Widget build(BuildContext context) {
    return SingleChildScrollView(
      child: Padding(
        padding: const EdgeInsets.symmetric(horizontal: 20),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
          const ScreenHeader(header: "ORGANIZiNIG COMMITTEE"),
          Container(
            color: const Color(0xff195973),
            padding: const EdgeInsets.symmetric(vertical: 3,horizontal: 10),
            margin: const EdgeInsets.symmetric(vertical: 10),
            child:  Text('Honorary Chairs',style: GoogleFonts.notoSans(fontSize: 25,color: Colors.white),),),
            HtmlWidget("""<ul>
            <li>Tsuyomu Ikenoue, University of Miyazaki, Japan</li>
            <li>Jeng-Shyang Pan, Shandong University of Science and Technology, China</li>
            </ul>""",textStyle: GoogleFonts.notoSans(fontSize: 16,color: Colors.black),),
            Container(
              color: const Color(0xff053a40),
              padding: const EdgeInsets.symmetric(vertical: 3,horizontal: 10),
              margin: const EdgeInsets.symmetric(vertical: 10),
              child:  Text('Advisory Committee Chairs',style: GoogleFonts.notoSans(fontSize: 25,color: Colors.white),),),
            HtmlWidget("""<ul>
            <li>Hiromitsu Hama, Osaka Metropolitan University, Japan</li>
            <li>Peng Shi, University of Adelaide, Australia (Tentative)</li>
            <li>Toshiaki Itami, Fukuyama University</li>
            <li>Etsuo Chosa, University of Miyazaki (Tentative)</li>
            <li>Pyke Tin, University of Miyazaki, Japan</li>
            </ul>""",textStyle: GoogleFonts.notoSans(fontSize: 16,color: Colors.black),),
            Container(
              color: const Color(0xff195973),
              padding: const EdgeInsets.symmetric(vertical: 3,horizontal: 10),
              margin: const EdgeInsets.symmetric(vertical: 10),
              child:  Text('Conference Chairs',style: GoogleFonts.notoSans(fontSize: 25,color: Colors.white),),),
            HtmlWidget("""<ul>
            <li>Hiroshi Sameshima, University of Miyazaki, Japan</li>
            <li>Jerry Chun-Wei Lin, Western Norway University of Applied Sciences, Norway</li>
            </ul>""",textStyle: GoogleFonts.notoSans(fontSize: 16,color: Colors.black),),
            Container(
              color: const Color(0xff053a40),
              padding: const EdgeInsets.symmetric(vertical: 3,horizontal: 10),
              margin: const EdgeInsets.symmetric(vertical: 10),
              child:  Text('Program Committee Chairs',style: GoogleFonts.notoSans(fontSize: 25,color: Colors.white),),),
            HtmlWidget("""<ul>
            <li>Thi Thi Zin, University of Miyazaki, Japan</li>
            <li>Chin-Shiuh Shieh, National Kaohsiung University of Science and Technology, Taiwan</li>
            <li>Yu-Cheng Fan, National Taipei University of Technology, Taiwan (Tentative)</li>
            </ul>""",textStyle: GoogleFonts.notoSans(fontSize: 16,color: Colors.black),),
            Container(
              color: const Color(0xff195973),
              padding: const EdgeInsets.symmetric(vertical: 3,horizontal: 10),
              margin: const EdgeInsets.symmetric(vertical: 10),
              child:  Text('Invited Session Chairs',style: GoogleFonts.notoSans(fontSize: 25,color: Colors.white),),),
            HtmlWidget("""<ul>
            <li>Chutima Tantikitti, Prince of Songkla University, Thailand</li>
            <li>Raja Sudhakaran, Vellore Institute of Technology, India</li>
            <li>Tien-Wen Sung, Fujian University of Technology, China (Tentative)</li>
            <li>Chih-Peng Fan, National Chung Hsing University, Taiwan (Tentative)</li>
            <li>Takahiro Ogawa, Hokkaido University, Japan (Tentative)</li>
            <li>Tetsuya Shimamura, Saitama University, Japan (Tentative)</li>
            </ul>""",textStyle: GoogleFonts.notoSans(fontSize: 16,color: Colors.black),),
            Container(
              color: const Color(0xff053a40),
              padding: const EdgeInsets.symmetric(vertical: 3,horizontal: 10),
              margin: const EdgeInsets.symmetric(vertical: 10),
              child:  Text('Publication Chairs',style: GoogleFonts.notoSans(fontSize: 25,color: Colors.white),),),
            HtmlWidget("""<ul>
            <li>Thi Thi Zin, University of Miyazaki, Japan</li>
            <li>Shu-Chuan Chu, Shandong University of Science and Technology, China (Tentative)</li>
            </ul>""",textStyle: GoogleFonts.notoSans(fontSize: 16,color: Colors.black),),
            Container(
              color: const Color(0xff195973),
              padding: const EdgeInsets.symmetric(vertical: 3,horizontal: 10),
              margin: const EdgeInsets.symmetric(vertical: 10),
              child:  Text('Local Organizing Chairs',style: GoogleFonts.notoSans(fontSize: 25,color: Colors.white),),),
            HtmlWidget("""<ul>
            <li>Hisaaki Yamaba, University of Miyazaki, Japan (Tentative)</li>
            </ul>""",textStyle: GoogleFonts.notoSans(fontSize: 16,color: Colors.black),),
            const SizedBox(height: 30,)
        ],),
      ),
    );

  }
}
