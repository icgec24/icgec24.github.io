import 'package:flutter/material.dart';
//import 'dart:typed_data';
import 'package:webview_flutter_platform_interface/webview_flutter_platform_interface.dart';
class WebViewExample extends StatefulWidget {
  final String web_url;
  const WebViewExample({required this.web_url});

  @override
  WebViewExampleState createState() => WebViewExampleState();
}

class WebViewExampleState extends State<WebViewExample> {
  late PlatformWebViewController controller;

  @override
  void initState() {
    // TODO: implement initState
    super.initState();
    controller = PlatformWebViewController(
      const PlatformWebViewControllerCreationParams(),
    )..loadRequest(
      LoadRequestParams(
        uri: Uri.parse(widget.web_url),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      // appBar: AppBar(
      //   title: const Text('Flutter WebView example'),
      //   actions: <Widget>[
      //     _SampleMenu(_controller),
      //   ],
      // ),
      body: PlatformWebViewWidget(
        PlatformWebViewWidgetCreationParams(controller: controller),
      ).build(context),
    );
  }
}

/*enum _MenuOptions {
  doPostRequest,
}*/

/*
class _SampleMenu extends StatelessWidget {
  const _SampleMenu(this.controller);

  final PlatformWebViewController controller;

  @override
  Widget build(BuildContext context) {
    return PopupMenuButton<_MenuOptions>(
      onSelected: (_MenuOptions value) {
        switch (value) {
          case _MenuOptions.doPostRequest:
            _onDoPostRequest(controller);
        }
      },
      itemBuilder: (BuildContext context) => <PopupMenuItem<_MenuOptions>>[
        const PopupMenuItem<_MenuOptions>(
          value: _MenuOptions.doPostRequest,
          child: Text('Post Request'),
        ),
      ],
    );
  }

  Future<void> _onDoPostRequest(PlatformWebViewController controller) async {
    final LoadRequestParams params = LoadRequestParams(
      uri: Uri.parse('https://httpbin.org/post'),
      method: LoadRequestMethod.post,
      headers: const <String, String>{
        'foo': 'bar',
        'Content-Type': 'text/plain'
      },
      body: Uint8List.fromList('Test Body'.codeUnits),
    );
    await controller.loadRequest(params);
  }
}*/
