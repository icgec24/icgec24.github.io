import 'package:flutter/material.dart';
import 'package:icgec_conference/widgets/screen_header.dart';

class KeynoteSpeechDesktop extends StatelessWidget {
  const KeynoteSpeechDesktop({super.key});

  @override
  Widget build(BuildContext context) {
    return const Column(
      children: [
        ScreenHeader(header: "Keynote Speech"),
        Text('Prof. Peng Shi: Cyber-physical systems: Analysis and Design')
      ],
    );
  }
}


