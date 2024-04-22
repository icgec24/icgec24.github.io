import 'package:flutter/material.dart';
import 'package:flutter_widget_from_html/flutter_widget_from_html.dart';
import 'package:google_fonts/google_fonts.dart';

import '../../widgets/screen_header.dart';

class ConferenceRegistrationDesktop extends StatelessWidget {
  const ConferenceRegistrationDesktop({super.key});

  @override
  Widget build(BuildContext context) {
    return SingleChildScrollView(
      child: Column(children: [
        const ScreenHeader(header: 'CONFERENCE REGISTRATION'),
        Container(
          padding: const EdgeInsets.only(left: 10,right: 10,top: 16),
          width: 1000,
          child:Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text("Dear Contributing Authors and Attendees",style: GoogleFonts.notoSans(fontSize: 16,)),
              const SizedBox(height: 16,),
              Text("We would like to express out appreciation and congratulations for the distinguished works you contributed to ICGEC-2024. Please follow the following instructions to accomplish the required procedures for conference registration.\n",style: GoogleFonts.notoSans(fontSize: 16,)),
              Text("All attendees for ICGEC-2024 are kindly requested to register. Related forms and supporting documents must be received with payment in JPY (Japanese Yen) no later than June 17, 2024. Please note that at least one author per paper must register. Otherwise the paper will not be included in the ICGEC-2024 technical program and proceedings.\n",style: GoogleFonts.notoSans(fontSize: 16,),textAlign: TextAlign.left,),
              Padding(
                padding: const EdgeInsets.symmetric(vertical: 8.0),
                child: Text("Registration Fee",style: GoogleFonts.notoSans(fontSize: 16,fontWeight: FontWeight.w600)),
              ),
              Image.asset("assets/images/conference_registration_fee.PNG"),
              Text("\nPlease feel free to let us know if you have any problem regarding the conference registration. Thank you again for your contribution to ICGEC-2024.\n",style: GoogleFonts.notoSans(fontSize: 16,)),
              HtmlWidget('''
              <div>Sincerely,</div>
              <div>Finance Chair of ICGEC-2024</div>
              <div><a href='mailto:icgec24@gmail.com'>icgec24@gmail.com</a></div>
              <div><a href='https://icgec24.github.io' target='_self'>https://icgec24.github.io</a></div>
              ''',textStyle: GoogleFonts.notoSans(fontSize: 16,color: Colors.black),),
              const SizedBox(height: 16,),
            ],),
        ),
      
      ],),
    );
  }
}

