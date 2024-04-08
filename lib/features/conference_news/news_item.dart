import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

class NewsItem extends StatelessWidget {
  final String dateString;
  final String title;
  final String body;

  const NewsItem({this.dateString = "",this.title = "",this.body = "",super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.only(top: 10,),
      width: 1000,
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Padding(
            padding: const EdgeInsets.only(left: 20),
            child: Row(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
            SizedBox(
                width: 130,
                child: Text(dateString,style: GoogleFonts.notoSans(fontSize: 18,fontWeight: FontWeight.bold,color: Colors.grey)),),
              Expanded(child: Text(title,style: GoogleFonts.notoSans(fontSize: 18,fontWeight: FontWeight.bold,color: Colors.black)))
            ],),
          ),
          Padding(
            padding: const EdgeInsets.only(left: 50,top: 10,bottom: 10),
            child: Text(body,style: GoogleFonts.notoSans(fontSize: 16),),
          ),
          const Padding(
            padding: EdgeInsets.symmetric(horizontal: 20),
            child: Divider(thickness: 1,color: Colors.grey,),
          )
        ],
      ),
    );
  }
}
