import 'dart:html';
import 'dart:ui_web' as ui;
import 'package:flutter/material.dart';
//import 'package:flutter_widget_from_html/flutter_widget_from_html.dart';
//import 'package:syncfusion_flutter_pdfviewer/pdfviewer.dart';

class PdfViewDesktop extends StatefulWidget {
  final String? pdfFileName;
  const PdfViewDesktop({this.pdfFileName,super.key});

  @override
  State<PdfViewDesktop> createState() => _PdfViewDesktopState();
}

class _PdfViewDesktopState extends State<PdfViewDesktop> {
  @override
  void initState() {
    super.initState();
    print("_iframeWidget is start?");

  }

  @override
  void dispose() {
    print("_iframeWidget is disposed?");
    super.dispose();
  }
  @override
  Widget build(BuildContext context) {
    final IFrameElement _iFrameElement = IFrameElement();
    _iFrameElement.style.height = '100%';
    _iFrameElement.style.width = '100%';
    _iFrameElement.src = 'https://icgec24.github.io/assets/assets/pdf/${widget.pdfFileName}';
    _iFrameElement.style.border = 'none';
    var _frameUrl = widget.pdfFileName;
    print(widget.pdfFileName);
    ui.platformViewRegistry.registerViewFactory(
      _frameUrl!,
          (int viewId) => _iFrameElement,
    );
    final Widget iframeWidget = HtmlElementView(
      viewType: _frameUrl,
      key:UniqueKey(),
    );
    return Scaffold(
      body: ListView(
        children: [
          SizedBox(
            height: MediaQuery.of(context).size.height,
            width: MediaQuery.of(context).size.width,
            child: iframeWidget,
          ),
        ],
      ),
    );
    // return Scaffold(
    //   backgroundColor: Colors.red,
    //    // body: SfPdfViewer.asset('assets/pdf/call_for_paper.pdf',pageLayoutMode: PdfPageLayoutMode.single,initialZoomLevel: 1.8,)
    //     body: Container(
    //       width: MediaQuery.of(context).size.width,
    //       height: MediaQuery.of(context).size.height,
    //       child: HtmlWidget('''
    //     <iframe width="100%" height="100%" src="https://icgec24.github.io/assets/assets/pdf/CallForPaper.pdf" title="Call For Paper"/>
    //     '''),
    //     )
    // );
  }
}
