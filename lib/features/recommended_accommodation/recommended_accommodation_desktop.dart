import 'package:flutter/material.dart';
import 'package:flutter_widget_from_html/flutter_widget_from_html.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:icgec_conference/widgets/screen_header.dart';

class RecommendedAccommodationDesktop extends StatelessWidget {
  const RecommendedAccommodationDesktop({super.key});

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        ScreenHeader(header: 'Recommended Accommodation'),
        Padding(
          padding: const EdgeInsets.only(left: 10.0,right: 10),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
            Text('\nDear Participants,',style: GoogleFonts.notoSans(fontSize: 16),),
            Text('\nMiyazaki Kanko Hotel is recommended for your stay in Miyazaki.',style: GoogleFonts.notoSans(fontSize: 16),),
            Text('Address: 1-1-1 Matsuyama, Miyazaki City, Miyazaki, 880-8512, Japan\nMain Phone Number: 0985-27-1212',style: GoogleFonts.notoSans(fontSize: 16),),
            HtmlWidget('Url: <a href="https://www.miyakan-h.com/english/">https://www.miyakan-h.com/</a>',textStyle: GoogleFonts.notoSans(fontSize: 16),),
            Text('\nPlease claim your participation in ICGEC-2023 while making the reservation.\nOr email icgec24@gmail.com and let the secretariat conduct the booking for you.\nThank you!',style: GoogleFonts.notoSans(fontSize: 16),)
          ],),
        ),
      ],
    );
  }
}
