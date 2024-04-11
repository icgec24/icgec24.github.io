import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:lottie/lottie.dart';

class GalleriesDesktop extends StatelessWidget {
  const GalleriesDesktop({super.key});

  @override
  Widget build(BuildContext context) {
    return Center(child: Column(
      crossAxisAlignment: CrossAxisAlignment.center,
      mainAxisSize: MainAxisSize.min,
      children: [
        Image.network("https://icgec24.github.io/assets/assets/lottie_animation/coming_soon.gif"),
        Text('Coming Soon...',style: GoogleFonts.notoSans(fontSize: 50),),
      ],
    ));
  }
}
