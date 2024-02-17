import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

class ScreenHeader extends StatelessWidget {
  final String header;
  const ScreenHeader({required this.header,super.key});

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Padding(
          padding: const EdgeInsets.all(12.0),
          child: FittedBox(child: Text(header.toUpperCase(),style: GoogleFonts.notoSans(fontSize: 48,fontWeight: FontWeight.normal,color: Colors.black),)),
        ),
        const Divider(thickness: 1,color: Colors.grey,)
      ],
    );
  }
}
