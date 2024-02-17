import 'package:flutter/material.dart';
import 'package:icgec_conference/features/home/home_mobile.dart';
import 'package:icgec_conference/features/home/home_tablete.dart';

import 'features/home/home_desktop.dart';
import 'package:webview_flutter_platform_interface/webview_flutter_platform_interface.dart';
import 'package:webview_flutter_web/webview_flutter_web.dart';
void main() {
  WebViewPlatform.instance = WebWebViewPlatform();
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.deepPurple),
        useMaterial3: true,
      ),
      home: const MyHomePage(title: 'Flutter Demo Home Page'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  const MyHomePage({super.key, required this.title});

  final String title;

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {

  @override
  Widget build(BuildContext context) {
    final screenWidth = MediaQuery.of(context).size.width;
    const breakpoint = 600.0;
    if (screenWidth < breakpoint) {
      return const Scaffold(
        body: HomeMobile(),
      );
    }else if (screenWidth < 1200){
      return const Scaffold(
        body: HomeTablet(),
      );
    }
    else{
      return const Scaffold(
        body: HomeDesktop(),
      );
    }
  }
}
