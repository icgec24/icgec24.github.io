import 'package:flutter/material.dart';
import 'package:syncfusion_flutter_pdfviewer/pdfviewer.dart';

class PdfViewDesktop extends StatelessWidget {
  const PdfViewDesktop({super.key});

  @override
  Widget build(BuildContext context) {
    PdfViewerController controller = PdfViewerController();
    return Scaffold(
      backgroundColor: Colors.black,
        body: SfPdfViewer.asset('assets/pdf/call_for_paper.pdf',pageLayoutMode: PdfPageLayoutMode.single,initialZoomLevel: 1.8,));
  }
}
