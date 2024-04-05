import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:icgec_conference/widgets/screen_header.dart';

class ImportanceDateDesktop extends StatelessWidget {
  const ImportanceDateDesktop({super.key});

  @override
  Widget build(BuildContext context) {
    return Column(children: [
      const ScreenHeader(header: 'IMPORTANCE DATES'),
      const SizedBox(height: 16,),
      Container(
        color: Colors.teal,
        padding: const EdgeInsets.symmetric(vertical: 3,horizontal: 10),
        child:  Text('Paper submission deadline',style: GoogleFonts.notoSans(fontSize: 25,color: Colors.white),),),
      Text('May 8, 2024',style: GoogleFonts.notoSans(fontSize: 32),),
      const SizedBox(height: 16,),
      Container(
        padding: const EdgeInsets.symmetric(vertical: 3,horizontal: 10),
        color: Colors.brown,
        child:  Text('Invited session application deadline',style: GoogleFonts.notoSans(fontSize: 25,color: Colors.white),),),
      Text('April 22, 2024',style: GoogleFonts.notoSans(fontSize: 32),),
      const SizedBox(height: 16,),
      Container(
        padding: const EdgeInsets.symmetric(vertical: 3,horizontal: 10),
        color: Colors.teal,
        child:  Text('Acceptance notification',style: GoogleFonts.notoSans(fontSize: 25,color: Colors.white),),),
      Text('May 31, 2024',style: GoogleFonts.notoSans(fontSize: 32),),
      const SizedBox(height: 16,),
      Container(
        padding: const EdgeInsets.symmetric(vertical: 3,horizontal: 10),
        color: Colors.brown,
        child:  Text('Camera-ready papers due',style: GoogleFonts.notoSans(fontSize: 25,color: Colors.white),),),
      Text('June 10, 2024',style: GoogleFonts.notoSans(fontSize: 32),),

    ],);
  }
}
