import 'package:flutter/material.dart';
import 'package:icgec_conference/features/conference_news/news_item.dart';
import 'package:icgec_conference/widgets/screen_header.dart';

class NewsDesktop extends StatelessWidget {
  const NewsDesktop({super.key});

  @override
  Widget build(BuildContext context) {
    return const Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        ScreenHeader(header: 'News'),
        NewsItem(
          dateString: '[ 2024-02-12 ]',
          title: 'Important Date Updated',
          body: 'Important Date of conference updated.',
        ),
        NewsItem(
          dateString: '[ 2024-02-12 ]',
          title: 'Recommended Accommodation Updated',
          body: 'The recommendation of hotel for stay in Miyazaki, Japan.',
        ),
        NewsItem(
          dateString: '[ 2024-02-8 ]',
          title: 'Website Updated',
          body: 'The website has been launched.',
        )
      ],
    );
  }
}
