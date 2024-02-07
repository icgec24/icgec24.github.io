import 'package:flutter/material.dart';

class NewsItem extends StatelessWidget {
  final String dateString;
  final String title;
  final String body;

  const NewsItem({this.dateString = "",this.title = "",this.body = "",super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      child: Column(
        children: [
          RichText(text: TextSpan(text: dateString,children: [
            TextSpan(text: title),
          ]))
        ],
      ),
    );
  }
}
