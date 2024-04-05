import 'dart:html';
import 'dart:ui_web' as ui;
import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';
import 'package:syncfusion_flutter_pdfviewer/pdfviewer.dart';
//import 'package:flutter_widget_from_html/flutter_widget_from_html.dart';
//import 'package:syncfusion_flutter_pdfviewer/pdfviewer.dart';

class PdfViewDesktop extends StatefulWidget {
  final String? pdfFileName;
  const PdfViewDesktop({this.pdfFileName,super.key});

  @override
  State<PdfViewDesktop> createState() => _PdfViewDesktopState();
}

class _PdfViewDesktopState extends State<PdfViewDesktop> {
  String platform = "";
  @override
  void initState() {
    super.initState();
    if (kIsWeb) {
      platform = getOSInsideWeb();
    }
    debugPrint(platform);

  }

  @override
  void dispose() {
    print("_iframeWidget is disposed?");
    super.dispose();
  }
  @override
  Widget build(BuildContext context) {
    if (platform == "Web")
  { final IFrameElement _iFrameElement = IFrameElement();
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
    );}
    return Scaffold(
      backgroundColor: Colors.red,
        body: SfPdfViewer.asset('assets/pdf/${widget.pdfFileName}',pageLayoutMode: PdfPageLayoutMode.single,initialZoomLevel: 1.0,scrollDirection:PdfScrollDirection.vertical)
    );
  }



  String getOSInsideWeb() {
  final userAgent = window.navigator.userAgent.toString().toLowerCase();
  if( userAgent.contains("iphone"))  return "ios";
  if( userAgent.contains("ipad")) return "ios";
  if( userAgent.contains("android"))  return "Android";
  return "Web";
  }
}
