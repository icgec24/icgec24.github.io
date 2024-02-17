import 'package:flutter/material.dart';
import 'package:flutter_widget_from_html/flutter_widget_from_html.dart';
import 'package:google_fonts/google_fonts.dart';

class KeynoteSpeechDesktop extends StatelessWidget {
  const KeynoteSpeechDesktop({super.key});

  @override
  Widget build(BuildContext context) {
    return  HtmlWidget('Url: <a href="https://www.miyakan-h.com/english/">https://www.miyakan-h.com/</a>',textStyle: GoogleFonts.notoSans(fontSize: 16),);
  }
}


