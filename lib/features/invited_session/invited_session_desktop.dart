import 'dart:html';

import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:flutter_widget_from_html/flutter_widget_from_html.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:icgec_conference/features/invited_session/model/invitation_link.dart';

import '../../widgets/screen_header.dart';

class InvitedSessionDesktop extends StatelessWidget {
  const InvitedSessionDesktop({super.key});

  @override
  Widget build(BuildContext context) {
    List<InvitationLink> invitationList = [
      InvitationLink(
          invitationCode: "ICGEC-2024-SS01",
          invitationTitle:
              "Special Session on AIoT Technology and Applications",
          invitationLinkURL: "https://icgec24.github.io/assets/assets/pdf/ICGEC-2024-SS01-CFP.pdf",
          invitationReceiveProfessor:
              "Prof. Tien-Wen Sung, Prof. Liang-Cheng Shiu, and Prof. Chao-Yang Lee"),
      InvitationLink(
          invitationCode: "ICGEC-2024-SS02",
          invitationTitle:
              "Special Session on Digital Transformation Technologies and Artificial Computing in Life Science: Exploring the Next Frontier",
          invitationLinkURL: "https://icgec24.github.io/assets/assets/pdf/ICGEC-2024-SS02-CFP.pdf",
          invitationReceiveProfessor:
              "Prof. Thi Thi Zin and Prof. Hiromisu Hama")
    ];
    return SingleChildScrollView(
      child: SizedBox(
        height: MediaQuery.of(context).size.width > 1200? MediaQuery.of(context).size.height:null,
        child: Column(
          mainAxisSize: MainAxisSize.max,
          children: [
            const ScreenHeader(header: 'INVITED SESSIONS'),
            Container(
              padding: const EdgeInsets.only(left: 20, right: 20, top: 16),
              width: 1000,
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  HtmlWidget(
                    '''
                <p style="line-height: 1.7em;">
                Dear Prospective Organizers,<br><br>Thank you for considering this Call for Invited Sessions from ICGEC-2024. ICGEC-2024 has the highest respect for organizers of Invited Sessions. An organizer for an Invited Session will have complete and independent control and judgment in reviewing and selecting submitted papers. Papers intended for an Invited Session should be submitted to its organizer directly and bypass the regular reviewing process for General Session. If we have the honor of having your participation, please prepare a <a href="https://icgec24.github.io/assets/assets/pdf/ICGEC-2024-SS-CFP-template.docx">CFP</a> for your Invited Session and return it to us (<a href=mailto:"icgec24@gmail.com">icgec24@gmail.com</a>). Our staff shall post it on the conference website.
                <br><br>We thank you and look forward to seeing you during ICGEC-2024.
                </p>
                <p style="line-height: 2em;">
                 Sincerely,
                <br>Tetsuya Shimamura, Mong-Fong Horng, Tien-Wen Sung and Chih-Peng Fan
                <br>Invited Session Chairs
                </p>''',
                    textStyle:
                        GoogleFonts.notoSans(fontSize: 16, color: Colors.black),
                  ),
                  const SizedBox(height: 20,),
                  const Divider(
                    height: 1,
                  ),
                  ListView.builder(
                      shrinkWrap: true,
                      physics: const NeverScrollableScrollPhysics(),
                      itemCount: invitationList.length,
                      itemBuilder: (context, index) {
                        InvitationLink item = invitationList[index];
                        return Column(
                          children: [
                            Row(
                              children: [
                                Container(
                                  padding: const EdgeInsets.symmetric(horizontal: 30),
                                    width: 180,
                                    child: Text(
                                      item.invitationCode!,
                                      style: GoogleFonts.notoSans(
                                          fontSize: 16, color: Colors.black),
                                    )),
                                Expanded(
                                  child: HtmlWidget(
                                      '''<p style="line-height: 2em;"> <em><a href="${item.invitationLinkURL}">${item.invitationTitle}</a></em>
                                                                 <br>${item.invitationReceiveProfessor}</p> 
                                                                                              ''',
                                      textStyle: GoogleFonts.notoSans(
                                          fontSize: 16, color: Colors.black)),
                                )
                              ],
                            ),
                            const Divider(
                              height: 1,
                            )
                          ],
                        );
                      })
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}
