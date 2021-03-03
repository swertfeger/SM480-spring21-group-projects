import request from "../utils/request";
import { twitterSearchURL } from "../constants/TwitterAPIs";

export function searchTweets(searchQuery) {

    // return await request()
    //     .get(`${twitterSearchURL}${searchQuery}`)
    //     .send()
    //     .then((res) => {
    //         if (res.body) {
    //            console.log(res.body);
    //         }
    //     })
    //     .catch((error) => {
    //         console.log(error);
    //     });

    return fakeResults;
}

const fakeResults = {
    "data": [{
        "author_id": "1356883099",
        "public_metrics": {
            "retweet_count": 3952,
            "reply_count": 0,
            "like_count": 0,
            "quote_count": 0
        },
        "id": "1367141600720277506",
        "text": "RT @VivekGRamaswamy: Who feels safer now that Mr. Potato Head and Dr. Suess have been canceled?",
        "created_at": "2021-03-03T15:55:32.000Z"
    }, {
        "author_id": "1346953280371515392",
        "public_metrics": {
            "retweet_count": 9931,
            "reply_count": 0,
            "like_count": 0,
            "quote_count": 0
        },
        "id": "1367141596769243140",
        "text": "RT @Beard_Vet: I trust Dr. Suess more than Dr. Fauci",
        "created_at": "2021-03-03T15:55:31.000Z"
    }, {
        "author_id": "1317220261050056704",
        "public_metrics": {
            "retweet_count": 0,
            "reply_count": 0,
            "like_count": 0,
            "quote_count": 0
        },
        "id": "1367141572349984770",
        "text": "The Facebook reaction to the Suess story is a good example of how their Algorithms will support another coup attempt\n\nFake cancel culture stories gained momentum and with every view, like, &amp; share Facebook  advertisers paid.\n\nTruth does not have a home on Facebook.",
        "created_at": "2021-03-03T15:55:25.000Z"
    }, {
        "author_id": "1483490107",
        "public_metrics": {
            "retweet_count": 0,
            "reply_count": 0,
            "like_count": 0,
            "quote_count": 0
        },
        "id": "1367141553672708099",
        "text": "We live in a world where wet ass Pussy is an anthem but dr suess and Mr potato head  are no good....",
        "created_at": "2021-03-03T15:55:21.000Z"
    }, {
        "author_id": "1016695504015507456",
        "public_metrics": {
            "retweet_count": 11284,
            "reply_count": 0,
            "like_count": 0,
            "quote_count": 0
        },
        "id": "1367141547037257729",
        "text": "RT @realDrSuess_: I officially been canceled. I wish I had a clever rhyme, oh wait I do. Never will I ever write another book, or profit bu…",
        "created_at": "2021-03-03T15:55:19.000Z"
    }, {
        "author_id": "1048362534942773248",
        "public_metrics": {
            "retweet_count": 11284,
            "reply_count": 0,
            "like_count": 0,
            "quote_count": 0
        },
        "id": "1367141541345710087",
        "text": "RT @realDrSuess_: I officially been canceled. I wish I had a clever rhyme, oh wait I do. Never will I ever write another book, or profit bu…",
        "created_at": "2021-03-03T15:55:18.000Z"
    }, {
        "author_id": "1076489170082770944",
        "public_metrics": {
            "retweet_count": 0,
            "reply_count": 0,
            "like_count": 0,
            "quote_count": 0
        },
        "id": "1367141510462988288",
        "text": "Süß und sexy!\uD83D\uDE0D https://t.co/ro7y3ZDOK7",
        "created_at": "2021-03-03T15:55:11.000Z"
    }, {
        "attachments": {
            "media_keys": ["3_1367141503429210121"]
        },
        "author_id": "1145155022835073025",
        "public_metrics": {
            "retweet_count": 0,
            "reply_count": 0,
            "like_count": 0,
            "quote_count": 0
        },
        "id": "1367141506591698952",
        "text": "Best of Dr Suess...\n#Biden\n#DrSuess https://t.co/SKT6c0NUVZ",
        "created_at": "2021-03-03T15:55:10.000Z"
    }, {
        "author_id": "1238883873024544770",
        "public_metrics": {
            "retweet_count": 11284,
            "reply_count": 0,
            "like_count": 0,
            "quote_count": 0
        },
        "id": "1367141494247854080",
        "text": "RT @realDrSuess_: I officially been canceled. I wish I had a clever rhyme, oh wait I do. Never will I ever write another book, or profit bu…",
        "created_at": "2021-03-03T15:55:07.000Z"
    }, {
        "author_id": "3969297920",
        "public_metrics": {
            "retweet_count": 0,
            "reply_count": 0,
            "like_count": 0,
            "quote_count": 0
        },
        "id": "1367141484437323780",
        "text": "@viet_t_nguyen My daughter &amp; I enjoyed some Suess, but we stayed away from MULBERRY STREET. The ethnicity most often caricatured there is Italian.",
        "created_at": "2021-03-03T15:55:04.000Z"
    }, {
        "author_id": "1348054618383802371",
        "public_metrics": {
            "retweet_count": 0,
            "reply_count": 0,
            "like_count": 0,
            "quote_count": 0
        },
        "id": "1367141466695426058",
        "text": "@tedcruz Dr. Suess is the greatest. You, on the other hand, are a sniveling piece of s**t. But useful.",
        "created_at": "2021-03-03T15:55:00.000Z"
    }, {
        "author_id": "1284156270749069312",
        "public_metrics": {
            "retweet_count": 0,
            "reply_count": 0,
            "like_count": 0,
            "quote_count": 0
        },
        "id": "1367141460903092227",
        "text": "@MackMaven @atrupar They are desperate for something to criticize.   And have they mentioned that it was Dr Suess' estate that removed the books.  They are blaming it on democrats.",
        "created_at": "2021-03-03T15:54:59.000Z"
    }, {
        "author_id": "2240269788",
        "public_metrics": {
            "retweet_count": 7,
            "reply_count": 0,
            "like_count": 0,
            "quote_count": 0
        },
        "id": "1367141458696949766",
        "text": "RT @nathanielO100: Hey conservatives, the “left” isn’t cancelling Mr. potato head or Dr. Suess. They are private companies making private d…",
        "created_at": "2021-03-03T15:54:58.000Z"
    }, {
        "author_id": "4045052652",
        "public_metrics": {
            "retweet_count": 0,
            "reply_count": 0,
            "like_count": 0,
            "quote_count": 0
        },
        "id": "1367141457929195520",
        "text": "There are white socialists who are really complaining about Dr. Suess being cancelled?",
        "created_at": "2021-03-03T15:54:58.000Z"
    }, {
        "author_id": "253775950",
        "public_metrics": {
            "retweet_count": 401,
            "reply_count": 0,
            "like_count": 0,
            "quote_count": 0
        },
        "id": "1367141431526236170",
        "text": "RT @Bakari_Sellers: Biden has one of the most bipartisan policy proposals in recent history and the GOP is talking about Dr. Suess.",
        "created_at": "2021-03-03T15:54:52.000Z"
    }, {
        "author_id": "3262700905",
        "public_metrics": {
            "retweet_count": 0,
            "reply_count": 0,
            "like_count": 0,
            "quote_count": 0
        },
        "id": "1367141424353980418",
        "text": "@tedcruz Boiled cheese shaped like person wishes it was a racist Dr Suess character instead of a racist politician.",
        "created_at": "2021-03-03T15:54:50.000Z"
    }, {
        "author_id": "1346993567332372483",
        "public_metrics": {
            "retweet_count": 11284,
            "reply_count": 0,
            "like_count": 0,
            "quote_count": 0
        },
        "id": "1367141423238295562",
        "text": "RT @realDrSuess_: I officially been canceled. I wish I had a clever rhyme, oh wait I do. Never will I ever write another book, or profit bu…",
        "created_at": "2021-03-03T15:54:50.000Z"
    }, {
        "author_id": "1219348905223249920",
        "public_metrics": {
            "retweet_count": 0,
            "reply_count": 0,
            "like_count": 0,
            "quote_count": 0
        },
        "id": "1367141412211486726",
        "text": "#cancelcancelculture \nthere are two types of people using this tag\n1. people using this to rage about Doctor Suess\n2. people making memes about the state of Twitter right now",
        "created_at": "2021-03-03T15:54:47.000Z"
    }, {
        "author_id": "1270747801438298112",
        "public_metrics": {
            "retweet_count": 11284,
            "reply_count": 0,
            "like_count": 0,
            "quote_count": 0
        },
        "id": "1367141394511519745",
        "text": "RT @realDrSuess_: I officially been canceled. I wish I had a clever rhyme, oh wait I do. Never will I ever write another book, or profit bu…",
        "created_at": "2021-03-03T15:54:43.000Z"
    }, {
        "author_id": "2187074454",
        "public_metrics": {
            "retweet_count": 11284,
            "reply_count": 0,
            "like_count": 0,
            "quote_count": 0
        },
        "id": "1367141389339947008",
        "text": "RT @realDrSuess_: I officially been canceled. I wish I had a clever rhyme, oh wait I do. Never will I ever write another book, or profit bu…",
        "created_at": "2021-03-03T15:54:42.000Z"
    }, {
        "author_id": "1231607918581010432",
        "public_metrics": {
            "retweet_count": 10,
            "reply_count": 0,
            "like_count": 0,
            "quote_count": 0
        },
        "id": "1367141381261549569",
        "text": "RT @CrispyToastYT: Dr. Suess is trending and he got banned... But I just found out why...\n\nSuess, you son of a bitch... https://t.co/zD6BxO…",
        "created_at": "2021-03-03T15:54:40.000Z"
    }, {
        "author_id": "842281231",
        "public_metrics": {
            "retweet_count": 0,
            "reply_count": 0,
            "like_count": 0,
            "quote_count": 0
        },
        "id": "1367141363188436998",
        "text": "@Sunnyflower_fun ...und schon 300 Du-bist-süß-Anfragen \uD83E\uDD23",
        "created_at": "2021-03-03T15:54:35.000Z"
    }, {
        "author_id": "56079107",
        "public_metrics": {
            "retweet_count": 11284,
            "reply_count": 0,
            "like_count": 0,
            "quote_count": 0
        },
        "id": "1367141356108406785",
        "text": "RT @realDrSuess_: I officially been canceled. I wish I had a clever rhyme, oh wait I do. Never will I ever write another book, or profit bu…",
        "created_at": "2021-03-03T15:54:34.000Z"
    }, {
        "author_id": "1295132028317265921",
        "public_metrics": {
            "retweet_count": 0,
            "reply_count": 0,
            "like_count": 0,
            "quote_count": 0
        },
        "id": "1367141350060269573",
        "text": "nobody is cancelling dr. suess. he was a racist and ppl need to know that, his racism is being brought to attention. we are not about to leave a racist w racist books in schools. https://t.co/TVuujDAo67",
        "created_at": "2021-03-03T15:54:32.000Z"
    }, {
        "author_id": "159224913",
        "public_metrics": {
            "retweet_count": 11284,
            "reply_count": 0,
            "like_count": 0,
            "quote_count": 0
        },
        "id": "1367141338676928516",
        "text": "RT @realDrSuess_: I officially been canceled. I wish I had a clever rhyme, oh wait I do. Never will I ever write another book, or profit bu…",
        "created_at": "2021-03-03T15:54:30.000Z"
    }, {
        "author_id": "1184310830034227200",
        "public_metrics": {
            "retweet_count": 11284,
            "reply_count": 0,
            "like_count": 0,
            "quote_count": 0
        },
        "id": "1367141326656004103",
        "text": "RT @realDrSuess_: I officially been canceled. I wish I had a clever rhyme, oh wait I do. Never will I ever write another book, or profit bu…",
        "created_at": "2021-03-03T15:54:27.000Z"
    }, {
        "author_id": "431348894",
        "public_metrics": {
            "retweet_count": 0,
            "reply_count": 0,
            "like_count": 0,
            "quote_count": 0
        },
        "id": "1367141324995051525",
        "text": "the new thing to be mad about if you're a conservative is the suess estate not printing books based on old racist shit that even suess himself wasn't proud of at the end of his life.\n\nwap is a jam. conservatives have broken brains.",
        "created_at": "2021-03-03T15:54:26.000Z"
    }, {
        "author_id": "365965031",
        "public_metrics": {
            "retweet_count": 11284,
            "reply_count": 0,
            "like_count": 0,
            "quote_count": 0
        },
        "id": "1367141322059087883",
        "text": "RT @realDrSuess_: I officially been canceled. I wish I had a clever rhyme, oh wait I do. Never will I ever write another book, or profit bu…",
        "created_at": "2021-03-03T15:54:26.000Z"
    }, {
        "author_id": "60968019",
        "public_metrics": {
            "retweet_count": 9931,
            "reply_count": 0,
            "like_count": 0,
            "quote_count": 0
        },
        "id": "1367141320679186436",
        "text": "RT @Beard_Vet: I trust Dr. Suess more than Dr. Fauci",
        "created_at": "2021-03-03T15:54:25.000Z"
    }, {
        "author_id": "33547114",
        "public_metrics": {
            "retweet_count": 11284,
            "reply_count": 0,
            "like_count": 0,
            "quote_count": 0
        },
        "id": "1367141306665992194",
        "text": "RT @realDrSuess_: I officially been canceled. I wish I had a clever rhyme, oh wait I do. Never will I ever write another book, or profit bu…",
        "created_at": "2021-03-03T15:54:22.000Z"
    }, {
        "author_id": "3239207889",
        "public_metrics": {
            "retweet_count": 0,
            "reply_count": 0,
            "like_count": 0,
            "quote_count": 0
        },
        "id": "1367141304099045385",
        "text": "omg diese nachbarin war so süß, ich liebs einfach \uD83D\uDE2D",
        "created_at": "2021-03-03T15:54:21.000Z"
    }, {
        "author_id": "10054212",
        "public_metrics": {
            "retweet_count": 0,
            "reply_count": 1,
            "like_count": 1,
            "quote_count": 0
        },
        "id": "1367141283878338560",
        "text": "I'm perfectly fine with not giving kids those books any more, especially in a context of hate crimes against Asians is a current problem.  But the totality of Dr. Suess' work is pretty positive and humanistic. I don't think he actively hated Asian people, he reflected the times.",
        "created_at": "2021-03-03T15:54:16.000Z"
    }, {
        "author_id": "156773199",
        "public_metrics": {
            "retweet_count": 11284,
            "reply_count": 0,
            "like_count": 0,
            "quote_count": 0
        },
        "id": "1367141283777642499",
        "text": "RT @realDrSuess_: I officially been canceled. I wish I had a clever rhyme, oh wait I do. Never will I ever write another book, or profit bu…",
        "created_at": "2021-03-03T15:54:16.000Z"
    }, {
        "author_id": "1548937776",
        "public_metrics": {
            "retweet_count": 11284,
            "reply_count": 0,
            "like_count": 0,
            "quote_count": 0
        },
        "id": "1367141283542798336",
        "text": "RT @realDrSuess_: I officially been canceled. I wish I had a clever rhyme, oh wait I do. Never will I ever write another book, or profit bu…",
        "created_at": "2021-03-03T15:54:16.000Z"
    }, {
        "author_id": "514944468",
        "public_metrics": {
            "retweet_count": 0,
            "reply_count": 0,
            "like_count": 0,
            "quote_count": 0
        },
        "id": "1367141276299190274",
        "text": "@imillhiser Now I want those books again. My two kids trashed all our copies of Dr. Suess because they loved them so much.  Usage, scribbling in them,  tearing pages,  jelly stains....",
        "created_at": "2021-03-03T15:54:15.000Z"
    }, {
        "author_id": "1326533705498816512",
        "public_metrics": {
            "retweet_count": 9931,
            "reply_count": 0,
            "like_count": 0,
            "quote_count": 0
        },
        "id": "1367141272247554048",
        "text": "RT @Beard_Vet: I trust Dr. Suess more than Dr. Fauci",
        "created_at": "2021-03-03T15:54:14.000Z"
    }, {
        "author_id": "30609034",
        "public_metrics": {
            "retweet_count": 0,
            "reply_count": 0,
            "like_count": 0,
            "quote_count": 0
        },
        "id": "1367141226655449092",
        "text": "@atrupar They're leapfrogging over fact that Dr. Suess Enterprises determined those books should be pulled in keeping with their standards. Bad faith is the core tenet of gop party.",
        "created_at": "2021-03-03T15:54:03.000Z"
    }, {
        "author_id": "1219863707322286083",
        "public_metrics": {
            "retweet_count": 1015,
            "reply_count": 0,
            "like_count": 0,
            "quote_count": 0
        },
        "id": "1367141201221193732",
        "text": "RT @SavageKC3: I bought some My pillows, made a reservation with Hyatt and will be reading myself to sleep with Dr. Suess.\uD83D\uDE04\n\nCancel culture…",
        "created_at": "2021-03-03T15:53:57.000Z"
    }, {
        "author_id": "1036748495821070336",
        "public_metrics": {
            "retweet_count": 11284,
            "reply_count": 0,
            "like_count": 0,
            "quote_count": 0
        },
        "id": "1367141199245582338",
        "text": "RT @realDrSuess_: I officially been canceled. I wish I had a clever rhyme, oh wait I do. Never will I ever write another book, or profit bu…",
        "created_at": "2021-03-03T15:53:56.000Z"
    }, {
        "author_id": "861307069898665988",
        "public_metrics": {
            "retweet_count": 3952,
            "reply_count": 0,
            "like_count": 0,
            "quote_count": 0
        },
        "id": "1367141192488652809",
        "text": "RT @VivekGRamaswamy: Who feels safer now that Mr. Potato Head and Dr. Suess have been canceled?",
        "created_at": "2021-03-03T15:53:55.000Z"
    }, {
        "author_id": "1327561530058031110",
        "public_metrics": {
            "retweet_count": 0,
            "reply_count": 0,
            "like_count": 0,
            "quote_count": 0
        },
        "id": "1367141186507468805",
        "text": "@realDrSuess_ @johannadmc829 Hang in there Dr Suess \nThere is a senile old Commi in the hoose, with the 2nd in charge a woman who is very loose\nHopefully the people will sort these traitorous turncoats out with a noose",
        "created_at": "2021-03-03T15:53:53.000Z"
    }, {
        "author_id": "13513922",
        "public_metrics": {
            "retweet_count": 11284,
            "reply_count": 0,
            "like_count": 0,
            "quote_count": 0
        },
        "id": "1367141171345129472",
        "text": "RT @realDrSuess_: I officially been canceled. I wish I had a clever rhyme, oh wait I do. Never will I ever write another book, or profit bu…",
        "created_at": "2021-03-03T15:53:50.000Z"
    }, {
        "author_id": "1349956649965023232",
        "public_metrics": {
            "retweet_count": 11284,
            "reply_count": 0,
            "like_count": 0,
            "quote_count": 0
        },
        "id": "1367141168492994564",
        "text": "RT @realDrSuess_: I officially been canceled. I wish I had a clever rhyme, oh wait I do. Never will I ever write another book, or profit bu…",
        "created_at": "2021-03-03T15:53:49.000Z"
    }, {
        "author_id": "768430854393753600",
        "public_metrics": {
            "retweet_count": 0,
            "reply_count": 0,
            "like_count": 0,
            "quote_count": 0
        },
        "id": "1367141167826149377",
        "text": "@cyler_fesh der frosch hut ist ja mal sowas von süß",
        "created_at": "2021-03-03T15:53:49.000Z"
    }, {
        "author_id": "197237293",
        "public_metrics": {
            "retweet_count": 0,
            "reply_count": 0,
            "like_count": 0,
            "quote_count": 0
        },
        "id": "1367141167083708421",
        "text": "@atrupar It’s accomplishing what that mean for it to accomplish—the rubes who watch Fox are all up in arms on Facebook about cancel culture and how the Democratic Party wants to cancel Dr. Suess instead of learning about the Covid-19 bill Dems are going to pass to help people",
        "created_at": "2021-03-03T15:53:49.000Z"
    }, {
        "attachments": {
            "media_keys": ["3_1367112626900267008"]
        },
        "author_id": "1109045138398081024",
        "public_metrics": {
            "retweet_count": 50,
            "reply_count": 0,
            "like_count": 0,
            "quote_count": 0
        },
        "id": "1367141162503593984",
        "text": "RT @LikeFineWine63: Dr Suess knows\n\n#DrSeuss https://t.co/HiQRaFbXnx",
        "created_at": "2021-03-03T15:53:48.000Z"
    }, {
        "author_id": "2549100751",
        "public_metrics": {
            "retweet_count": 11284,
            "reply_count": 0,
            "like_count": 0,
            "quote_count": 0
        },
        "id": "1367141160443998210",
        "text": "RT @realDrSuess_: I officially been canceled. I wish I had a clever rhyme, oh wait I do. Never will I ever write another book, or profit bu…",
        "created_at": "2021-03-03T15:53:47.000Z"
    }, {
        "author_id": "1362957755175350273",
        "public_metrics": {
            "retweet_count": 0,
            "reply_count": 1,
            "like_count": 1,
            "quote_count": 0
        },
        "id": "1367141152772734981",
        "text": "@Icy_IceCube @HiddenRockLee @dangelno and you think that dr suess books will solve all of our problems? with all the racist shit still in circulation, people are still racist. some even think its FUNNY. a book isnt going to solve anything LMAO",
        "created_at": "2021-03-03T15:53:45.000Z"
    }, {
        "attachments": {
            "media_keys": ["3_1367092288720162821", "3_1367092288724357120", "3_1367092288724287492", "3_1367092288720162820"]
        },
        "author_id": "831894638109851648",
        "public_metrics": {
            "retweet_count": 5,
            "reply_count": 0,
            "like_count": 0,
            "quote_count": 0
        },
        "id": "1367141146477158401",
        "text": "RT @callme_Chari: My my my look at all these celebrities reading Dr. Suess. https://t.co/H30dhjtkxU",
        "created_at": "2021-03-03T15:53:44.000Z"
    }, {
        "author_id": "1347235127924023301",
        "public_metrics": {
            "retweet_count": 9931,
            "reply_count": 0,
            "like_count": 0,
            "quote_count": 0
        },
        "id": "1367141128118685697",
        "text": "RT @Beard_Vet: I trust Dr. Suess more than Dr. Fauci",
        "created_at": "2021-03-03T15:53:39.000Z"
    }, {
        "author_id": "3148723796",
        "public_metrics": {
            "retweet_count": 11284,
            "reply_count": 0,
            "like_count": 0,
            "quote_count": 0
        },
        "id": "1367141125576884229",
        "text": "RT @realDrSuess_: I officially been canceled. I wish I had a clever rhyme, oh wait I do. Never will I ever write another book, or profit bu…",
        "created_at": "2021-03-03T15:53:39.000Z"
    }, {
        "author_id": "814986849596899328",
        "public_metrics": {
            "retweet_count": 11284,
            "reply_count": 0,
            "like_count": 0,
            "quote_count": 0
        },
        "id": "1367141121399349251",
        "text": "RT @realDrSuess_: I officially been canceled. I wish I had a clever rhyme, oh wait I do. Never will I ever write another book, or profit bu…",
        "created_at": "2021-03-03T15:53:38.000Z"
    }, {
        "author_id": "913438862",
        "public_metrics": {
            "retweet_count": 11284,
            "reply_count": 0,
            "like_count": 0,
            "quote_count": 0
        },
        "id": "1367141083122176001",
        "text": "RT @realDrSuess_: I officially been canceled. I wish I had a clever rhyme, oh wait I do. Never will I ever write another book, or profit bu…",
        "created_at": "2021-03-03T15:53:29.000Z"
    }, {
        "author_id": "297015736",
        "public_metrics": {
            "retweet_count": 12,
            "reply_count": 0,
            "like_count": 0,
            "quote_count": 0
        },
        "id": "1367141065875218438",
        "text": "RT @ConservativeTht: “Today you are You, that is truer than true. There is no one alive who is Youer than You.” ~ Dr. Suess \n#DontCancelDrS…",
        "created_at": "2021-03-03T15:53:25.000Z"
    }, {
        "author_id": "2857237490",
        "public_metrics": {
            "retweet_count": 0,
            "reply_count": 0,
            "like_count": 0,
            "quote_count": 0
        },
        "id": "1367141055393595392",
        "text": "Did we just cancel Dr. Suess?",
        "created_at": "2021-03-03T15:53:22.000Z"
    }, {
        "author_id": "372041924",
        "public_metrics": {
            "retweet_count": 1,
            "reply_count": 0,
            "like_count": 0,
            "quote_count": 0
        },
        "id": "1367141051773902860",
        "text": "RT @1953mdl: Biden ☭  REMOVES Dr. Seuss from Read Across America Day https://t.co/8AFk426sEX via @pamelageller",
        "created_at": "2021-03-03T15:53:21.000Z"
    }, {
        "author_id": "727867464625836032",
        "public_metrics": {
            "retweet_count": 0,
            "reply_count": 1,
            "like_count": 0,
            "quote_count": 0
        },
        "id": "1367141038545113088",
        "text": "@bmkibler Wait what? Dr suess has racist material in his books?",
        "created_at": "2021-03-03T15:53:18.000Z"
    }, {
        "author_id": "1358514791149666305",
        "public_metrics": {
            "retweet_count": 175,
            "reply_count": 0,
            "like_count": 0,
            "quote_count": 0
        },
        "id": "1367141034598281221",
        "text": "RT @stinchfield1776: Here is my own Dr. Seuss rhyme that ends with “your socialist pig”. #Dr. Seuss #Suess #cancelcancelculture  https://t.…",
        "created_at": "2021-03-03T15:53:17.000Z"
    }, {
        "author_id": "3163937065",
        "public_metrics": {
            "retweet_count": 0,
            "reply_count": 1,
            "like_count": 1,
            "quote_count": 0
        },
        "id": "1367141031645478915",
        "text": "@kota_hodge The same reason why these dr suess books would be appropriate learning tools for say high schoolers. They’re mature enough to look at the books and see them for stereotypes rather than truths. Some stuff just isn’t for kids.",
        "created_at": "2021-03-03T15:53:16.000Z"
    }, {
        "author_id": "372041924",
        "public_metrics": {
            "retweet_count": 1,
            "reply_count": 0,
            "like_count": 1,
            "quote_count": 0
        },
        "id": "1367141022795517954",
        "text": "Biden ☭  REMOVES Dr. Seuss from Read Across America Day https://t.co/8AFk426sEX via @pamelageller",
        "created_at": "2021-03-03T15:53:14.000Z"
    }, {
        "author_id": "859729270561587200",
        "public_metrics": {
            "retweet_count": 12,
            "reply_count": 0,
            "like_count": 0,
            "quote_count": 0
        },
        "id": "1367141015136600067",
        "text": "RT @ConservativeTht: “Today you are You, that is truer than true. There is no one alive who is Youer than You.” ~ Dr. Suess \n#DontCancelDrS…",
        "created_at": "2021-03-03T15:53:12.000Z"
    }, {
        "author_id": "1260396143583862787",
        "public_metrics": {
            "retweet_count": 0,
            "reply_count": 0,
            "like_count": 0,
            "quote_count": 0
        },
        "id": "1367141011793858560",
        "text": "Omfg @BishForCongress could be one of the dumbest ppl running for Congress. She actually asked why is \"WAP\" and Anaconda ok for kids and Dr. Suess is not. One is for adults and the other is for kids with racist illustrations. Ppl in CA she is your problem, deal with it please.",
        "created_at": "2021-03-03T15:53:12.000Z"
    }, {
        "author_id": "1261299209409409024",
        "public_metrics": {
            "retweet_count": 11284,
            "reply_count": 0,
            "like_count": 0,
            "quote_count": 0
        },
        "id": "1367141010220974082",
        "text": "RT @realDrSuess_: I officially been canceled. I wish I had a clever rhyme, oh wait I do. Never will I ever write another book, or profit bu…",
        "created_at": "2021-03-03T15:53:11.000Z"
    }, {
        "author_id": "32677335",
        "public_metrics": {
            "retweet_count": 2,
            "reply_count": 0,
            "like_count": 0,
            "quote_count": 0
        },
        "id": "1367140997696802821",
        "text": "RT @bmkibler: The Venn diagram of people who had to go back and delete blatantly racist tweets when looking for a new job and the people co…",
        "created_at": "2021-03-03T15:53:08.000Z"
    }, {
        "author_id": "379218437",
        "public_metrics": {
            "retweet_count": 2,
            "reply_count": 0,
            "like_count": 0,
            "quote_count": 0
        },
        "id": "1367140966461829123",
        "text": "RT @SecStateJohnHay: @Yascha_Mounk The original outage was based on a misreported story (see below). \n\nThe publisher aspect is true, but it…",
        "created_at": "2021-03-03T15:53:01.000Z"
    }, {
        "author_id": "1360915644217180162",
        "public_metrics": {
            "retweet_count": 13,
            "reply_count": 0,
            "like_count": 0,
            "quote_count": 0
        },
        "id": "1367140966306570246",
        "text": "RT @gruen_wald: - Awww, wie süß? Wie heißt denn die kleine Maus? Mädchen oder Junge?\n\n- Danke, Alex ist ein Dell Inspiron G7 17 7700 Notebo…",
        "created_at": "2021-03-03T15:53:01.000Z"
    }, {
        "author_id": "208689388",
        "public_metrics": {
            "retweet_count": 0,
            "reply_count": 0,
            "like_count": 1,
            "quote_count": 0
        },
        "id": "1367140965035757570",
        "text": "@JulieMcElwee4 Its baffling that the folks on left don't even realize Dr Suess was a huge Liberal. They're just the minions for the elites, that do NOT want to promote, colorblindness, &amp; \"sameness\". Division, fear &amp; hatred, is their power",
        "created_at": "2021-03-03T15:53:00.000Z"
    }, {
        "author_id": "252307931",
        "public_metrics": {
            "retweet_count": 11284,
            "reply_count": 0,
            "like_count": 0,
            "quote_count": 0
        },
        "id": "1367140962410127361",
        "text": "RT @realDrSuess_: I officially been canceled. I wish I had a clever rhyme, oh wait I do. Never will I ever write another book, or profit bu…",
        "created_at": "2021-03-03T15:53:00.000Z"
    }, {
        "author_id": "1338252805585428482",
        "public_metrics": {
            "retweet_count": 0,
            "reply_count": 0,
            "like_count": 0,
            "quote_count": 0
        },
        "id": "1367140962259075074",
        "text": "Drückt mir bitte die Daumen. Das wäre sehr süß. Suche halt immer noch",
        "created_at": "2021-03-03T15:53:00.000Z"
    }, {
        "author_id": "2900480370",
        "public_metrics": {
            "retweet_count": 3952,
            "reply_count": 0,
            "like_count": 0,
            "quote_count": 0
        },
        "id": "1367140959813787655",
        "text": "RT @VivekGRamaswamy: Who feels safer now that Mr. Potato Head and Dr. Suess have been canceled?",
        "created_at": "2021-03-03T15:52:59.000Z"
    }, {
        "author_id": "1175797901144051712",
        "public_metrics": {
            "retweet_count": 0,
            "reply_count": 1,
            "like_count": 0,
            "quote_count": 0
        },
        "id": "1367140954294145032",
        "text": "@djdipdart wait did dr suess make it out of the hood",
        "created_at": "2021-03-03T15:52:58.000Z"
    }, {
        "author_id": "180885830",
        "public_metrics": {
            "retweet_count": 0,
            "reply_count": 0,
            "like_count": 0,
            "quote_count": 0
        },
        "id": "1367140953283301378",
        "text": "Dr Suess NOT banned but... “ for the most recent year for which we have data (2019), of the 10 books most challenged and banned, *EIGHT* of them were solely because of LGBTQ themes.\n\nIt seems social conservatives have worked overtime to, uh, \"cancel\" LGBTQ books.” https://t.co/BVFotUtzYY",
        "created_at": "2021-03-03T15:52:58.000Z"
    }, {
        "author_id": "2229651353",
        "public_metrics": {
            "retweet_count": 9931,
            "reply_count": 0,
            "like_count": 0,
            "quote_count": 0
        },
        "id": "1367140949432946692",
        "text": "RT @Beard_Vet: I trust Dr. Suess more than Dr. Fauci",
        "created_at": "2021-03-03T15:52:57.000Z"
    }, {
        "author_id": "1002679890368450562",
        "public_metrics": {
            "retweet_count": 0,
            "reply_count": 0,
            "like_count": 0,
            "quote_count": 0
        },
        "id": "1367140943846080517",
        "text": "@RepDLesko Yeah cause Dr Suess books are the only books out there for children to read.... shut upppppp",
        "created_at": "2021-03-03T15:52:55.000Z"
    }, {
        "author_id": "1327072937497792514",
        "public_metrics": {
            "retweet_count": 4,
            "reply_count": 0,
            "like_count": 0,
            "quote_count": 0
        },
        "id": "1367140937122656258",
        "text": "RT @Idolomantises: @dangelno it baffles me that people think folks are \"cancelling\" dr. suess as if it isnt sort of common knowledge that h…",
        "created_at": "2021-03-03T15:52:54.000Z"
    }, {
        "author_id": "3411415827",
        "public_metrics": {
            "retweet_count": 395,
            "reply_count": 0,
            "like_count": 0,
            "quote_count": 0
        },
        "id": "1367140936057257984",
        "text": "RT @RubinReport: Dr. Suess is even more dangerous than people think. \n\nHere, I read from “Oh, The Places You’ll Go” where he dares tell you…",
        "created_at": "2021-03-03T15:52:54.000Z"
    }, {
        "author_id": "3332258840",
        "public_metrics": {
            "retweet_count": 23,
            "reply_count": 0,
            "like_count": 0,
            "quote_count": 0
        },
        "id": "1367140921607942147",
        "text": "RT @dalexaa_: I live in a world where we are cancelling Aunt Jemima and Uncle Bens, we have a “Washington Football Team”, a potato’s gender…",
        "created_at": "2021-03-03T15:52:50.000Z"
    }, {
        "author_id": "36135824",
        "public_metrics": {
            "retweet_count": 401,
            "reply_count": 0,
            "like_count": 0,
            "quote_count": 0
        },
        "id": "1367140892738392070",
        "text": "RT @Bakari_Sellers: Biden has one of the most bipartisan policy proposals in recent history and the GOP is talking about Dr. Suess.",
        "created_at": "2021-03-03T15:52:43.000Z"
    }, {
        "attachments": {
            "media_keys": ["3_1367140689277030400", "3_1367140740531425282"]
        },
        "author_id": "1295950184883593216",
        "public_metrics": {
            "retweet_count": 0,
            "reply_count": 1,
            "like_count": 0,
            "quote_count": 0
        },
        "id": "1367140889563381768",
        "text": "@d4dejaa aint doctor Suess literally just make this shit (he made seperate racist cartoons) https://t.co/HEOaI4Tgan",
        "created_at": "2021-03-03T15:52:42.000Z"
    }, {
        "author_id": "721005460812361728",
        "public_metrics": {
            "retweet_count": 0,
            "reply_count": 0,
            "like_count": 4,
            "quote_count": 0
        },
        "id": "1367140889332756481",
        "text": "Lol holy fuck how are people only finding out about Dr. Suess controversies now, why is twitter 10 years behind tumblr ctfu",
        "created_at": "2021-03-03T15:52:42.000Z"
    }, {
        "author_id": "1212850997317394432",
        "public_metrics": {
            "retweet_count": 57,
            "reply_count": 0,
            "like_count": 0,
            "quote_count": 0
        },
        "id": "1367140885582913542",
        "text": "RT @WinkelAlexis: The bitches in the #cancelcancelculture tag look so DUMB \uD83D\uDE2D\uD83D\uDE2D literally simping so hard for a fucking ✨dead guy✨ y’all can…",
        "created_at": "2021-03-03T15:52:42.000Z"
    }, {
        "author_id": "1263434814",
        "public_metrics": {
            "retweet_count": 0,
            "reply_count": 0,
            "like_count": 1,
            "quote_count": 0
        },
        "id": "1367140884287008769",
        "text": "I love when people are pandering and then republicans become instantly horny for whatever the controversy is. for instance this week they would definitely have sex with a plastic potato and a dr suess book to own the libs I’m sure of it",
        "created_at": "2021-03-03T15:52:41.000Z"
    }, {
        "author_id": "179880348",
        "public_metrics": {
            "retweet_count": 37,
            "reply_count": 0,
            "like_count": 0,
            "quote_count": 0
        },
        "id": "1367140872488247297",
        "text": "RT @imjdsharp: If \"racist undertones\" is the criteria for cancelling Dr. Suess then the same must be applied to 90% of rap lyrics, all Quen…",
        "created_at": "2021-03-03T15:52:38.000Z"
    }, {
        "author_id": "3131604880",
        "public_metrics": {
            "retweet_count": 11284,
            "reply_count": 0,
            "like_count": 0,
            "quote_count": 0
        },
        "id": "1367140865978818561",
        "text": "RT @realDrSuess_: I officially been canceled. I wish I had a clever rhyme, oh wait I do. Never will I ever write another book, or profit bu…",
        "created_at": "2021-03-03T15:52:37.000Z"
    }, {
        "author_id": "193877462",
        "public_metrics": {
            "retweet_count": 11284,
            "reply_count": 0,
            "like_count": 0,
            "quote_count": 0
        },
        "id": "1367140861876727809",
        "text": "RT @realDrSuess_: I officially been canceled. I wish I had a clever rhyme, oh wait I do. Never will I ever write another book, or profit bu…",
        "created_at": "2021-03-03T15:52:36.000Z"
    }, {
        "author_id": "719254050907254784",
        "public_metrics": {
            "retweet_count": 0,
            "reply_count": 0,
            "like_count": 0,
            "quote_count": 0
        },
        "id": "1367140853018484736",
        "text": "Damn I didn’t know Dr. Suess was a racist. I really loved those books smh.",
        "created_at": "2021-03-03T15:52:34.000Z"
    }, {
        "author_id": "2288325620",
        "public_metrics": {
            "retweet_count": 3952,
            "reply_count": 0,
            "like_count": 0,
            "quote_count": 0
        },
        "id": "1367140846127050754",
        "text": "RT @VivekGRamaswamy: Who feels safer now that Mr. Potato Head and Dr. Suess have been canceled?",
        "created_at": "2021-03-03T15:52:32.000Z"
    }, {
        "author_id": "16151700",
        "public_metrics": {
            "retweet_count": 401,
            "reply_count": 0,
            "like_count": 0,
            "quote_count": 0
        },
        "id": "1367140841924493318",
        "text": "RT @Bakari_Sellers: Biden has one of the most bipartisan policy proposals in recent history and the GOP is talking about Dr. Suess.",
        "created_at": "2021-03-03T15:52:31.000Z"
    }, {
        "author_id": "40325091",
        "public_metrics": {
            "retweet_count": 37,
            "reply_count": 0,
            "like_count": 0,
            "quote_count": 0
        },
        "id": "1367140839772815360",
        "text": "RT @imjdsharp: If \"racist undertones\" is the criteria for cancelling Dr. Suess then the same must be applied to 90% of rap lyrics, all Quen…",
        "created_at": "2021-03-03T15:52:31.000Z"
    }, {
        "author_id": "1340918671",
        "public_metrics": {
            "retweet_count": 0,
            "reply_count": 0,
            "like_count": 0,
            "quote_count": 0
        },
        "id": "1367140831350697991",
        "text": "I’m sorry but I’m a Dr.Suess Stan",
        "created_at": "2021-03-03T15:52:29.000Z"
    }, {
        "author_id": "17487771",
        "public_metrics": {
            "retweet_count": 0,
            "reply_count": 0,
            "like_count": 0,
            "quote_count": 0
        },
        "id": "1367140824769789954",
        "text": "Ryan Field Books : Was Dr. Suess Racist AND Full of Crap, Too? Ryan F... https://t.co/7RfTpOFEHU",
        "created_at": "2021-03-03T15:52:27.000Z"
    }, {
        "author_id": "1265107261401284608",
        "public_metrics": {
            "retweet_count": 0,
            "reply_count": 0,
            "like_count": 0,
            "quote_count": 0
        },
        "id": "1367140816561577989",
        "text": "@InfernoOmni Bruh back then racism was normal if dr.suess was still alive today he would regret and apologize for what he did there is no need to try to cancel someone who is dead",
        "created_at": "2021-03-03T15:52:25.000Z"
    }, {
        "author_id": "1288205927892398082",
        "public_metrics": {
            "retweet_count": 0,
            "reply_count": 0,
            "like_count": 0,
            "quote_count": 0
        },
        "id": "1367140804548956160",
        "text": "It luks painful to think Dr Suess is a real Dr",
        "created_at": "2021-03-03T15:52:22.000Z"
    }, {
        "author_id": "265765404",
        "public_metrics": {
            "retweet_count": 11284,
            "reply_count": 0,
            "like_count": 0,
            "quote_count": 0
        },
        "id": "1367140791974563851",
        "text": "RT @realDrSuess_: I officially been canceled. I wish I had a clever rhyme, oh wait I do. Never will I ever write another book, or profit bu…",
        "created_at": "2021-03-03T15:52:19.000Z"
    }, {
        "author_id": "64448440",
        "public_metrics": {
            "retweet_count": 40,
            "reply_count": 0,
            "like_count": 0,
            "quote_count": 0
        },
        "id": "1367140789210517507",
        "text": "RT @OlsonBand: So after doctor suess are we going to take a look at the bible or... does that racism not count? #DrSeuss #cancelcancelcultu…",
        "created_at": "2021-03-03T15:52:19.000Z"
    }, {
        "author_id": "885247046491549697",
        "public_metrics": {
            "retweet_count": 11284,
            "reply_count": 0,
            "like_count": 0,
            "quote_count": 0
        },
        "id": "1367140787528605700",
        "text": "RT @realDrSuess_: I officially been canceled. I wish I had a clever rhyme, oh wait I do. Never will I ever write another book, or profit bu…",
        "created_at": "2021-03-03T15:52:18.000Z"
    }, {
        "author_id": "605001745",
        "public_metrics": {
            "retweet_count": 2,
            "reply_count": 0,
            "like_count": 0,
            "quote_count": 0
        },
        "id": "1367140782554112003",
        "text": "RT @bmkibler: The Venn diagram of people who had to go back and delete blatantly racist tweets when looking for a new job and the people co…",
        "created_at": "2021-03-03T15:52:17.000Z"
    }, {
        "attachments": {
            "media_keys": ["3_1367140768578756612"]
        },
        "author_id": "1352438965928914945",
        "public_metrics": {
            "retweet_count": 0,
            "reply_count": 0,
            "like_count": 0,
            "quote_count": 0
        },
        "id": "1367140782428291073",
        "text": "@mgc1164w @DonaldJTrumpJr LIES LIES LIES. The Dr Suess to remove these books last year, it has nothing to do with the Demarcates he is spreading lies https://t.co/I6VZLb2jG5",
        "created_at": "2021-03-03T15:52:17.000Z"
    }, {
        "attachments": {
            "media_keys": ["3_1367140762127917058"]
        },
        "author_id": "1136739103045705728",
        "public_metrics": {
            "retweet_count": 0,
            "reply_count": 1,
            "like_count": 0,
            "quote_count": 0
        },
        "id": "1367140766225735685",
        "text": "@Right_oo7 @meatxmane @WellYeahitsOkay @LAVINEISTHEGOAT @pivi_mayor please learn to read. You can start with dr suess if you would like https://t.co/EJhfcvj6hz",
        "created_at": "2021-03-03T15:52:13.000Z"
    }, {
        "author_id": "1110598797997080576",
        "public_metrics": {
            "retweet_count": 0,
            "reply_count": 0,
            "like_count": 0,
            "quote_count": 0
        },
        "id": "1367140744960565249",
        "text": "@Tigerelch \uD83D\uDE0D wie süß!",
        "created_at": "2021-03-03T15:52:08.000Z"
    }],
    "includes": {
        "users": [{
            "id": "1356883099",
            "name": "Grace C. Gabrielsen",
            "username": "gabrielsen_"
        }, {
            "id": "1346953280371515392",
            "name": "Zdoyle04",
            "username": "zdoyle04"
        }, {
            "id": "1317220261050056704",
            "name": "tRump's Defense Strategy Team",
            "username": "conny_pro"
        }, {
            "id": "1483490107",
            "name": "jarry",
            "username": "jarryazi"
        }, {
            "id": "1016695504015507456",
            "name": "Randy",
            "username": "Randy75314773"
        }, {
            "id": "1048362534942773248",
            "name": "God wins always",
            "username": "halfawake11114"
        }, {
            "id": "1076489170082770944",
            "name": "Womenlover",
            "username": "Womenlo66775320"
        }, {
            "id": "1145155022835073025",
            "name": "Dr. Ben Willard",
            "username": "DLyfter"
        }, {
            "id": "1238883873024544770",
            "name": "DERRY A. PRICE",
            "username": "DerryPrice"
        }, {
            "id": "3969297920",
            "name": "John Domini",
            "username": "DavveroDomini"
        }, {
            "id": "1348054618383802371",
            "name": "Donald J. Trump",
            "username": "NotTrumpDonaldJ"
        }, {
            "id": "1284156270749069312",
            "name": "Judy LaTorre",
            "username": "JudyLaTorre6"
        }, {
            "id": "2240269788",
            "name": "\uD83C\uDF1EjustBROOKLYN\uD83C\uDF1D",
            "username": "BachWithAnE"
        }, {
            "id": "4045052652",
            "name": "Wear a Mask & Stay Home",
            "username": "cmmcmmcmmcmm"
        }, {
            "id": "253775950",
            "name": "Cranky Patriot \uD83D\uDC9B",
            "username": "crankypatriot"
        }, {
            "id": "3262700905",
            "name": "Beau Harris",
            "username": "BeingBeauHarris"
        }, {
            "id": "1346993567332372483",
            "name": "DocLockj",
            "username": "DLockj"
        }, {
            "id": "1219348905223249920",
            "name": "Heath",
            "username": "Heath00013"
        }, {
            "id": "1270747801438298112",
            "name": "Mike Leiberthal",
            "username": "leiberthal"
        }, {
            "id": "2187074454",
            "name": "Nob Ody",
            "username": "Firettay"
        }, {
            "id": "1231607918581010432",
            "name": "Professor Varien",
            "username": "Varien_Legend"
        }, {
            "id": "842281231",
            "name": "Bärtmen",
            "username": "Ma__life49"
        }, {
            "id": "56079107",
            "name": "Claricia Quinn",
            "username": "ClariciaQ"
        }, {
            "id": "1295132028317265921",
            "name": "ًkiko\uD83C\uDF4A| in school",
            "username": "knjsluut"
        }, {
            "id": "159224913",
            "name": "John Gates",
            "username": "elchulo2012"
        }, {
            "id": "1184310830034227200",
            "name": "PaperDreams",
            "username": "PaperDreams125"
        }, {
            "id": "431348894",
            "name": "coryboryglory\uD83C\uDF86",
            "username": "MillerBombz"
        }, {
            "id": "365965031",
            "name": "GUNDAM-SQEX",
            "username": "SQUAREGUNDAM"
        }, {
            "id": "60968019",
            "name": "Lady L. North",
            "username": "LadyLNorth"
        }, {
            "id": "33547114",
            "name": "Doll",
            "username": "doll747"
        }, {
            "id": "3239207889",
            "name": "sternipunker 1.0",
            "username": "mute_somebody"
        }, {
            "id": "10054212",
            "name": "ɯsᴉɹǝuuɐW ll∀-ʇI-ʍouʞ ΩΩΩΩΩΩΩΩΩΩΩΩΩΩΩΩ",
            "username": "chaircrusher"
        }, {
            "id": "156773199",
            "name": "Greg Madden",
            "username": "MaddenRadio"
        }, {
            "id": "1548937776",
            "name": "\uD83C\uDDE8\uD83C\uDDE6\uD83C\uDD71️ee \uD83C\uDD71️ee\uD83C\uDDFA\uD83C\uDDF8 Pres Elect of something",
            "username": "BrendaBeanie"
        }, {
            "id": "514944468",
            "name": "Bill Kaye",
            "username": "bkayetwit"
        }, {
            "id": "1326533705498816512",
            "name": "Mandolorian Pitbull",
            "username": "MandolorianP"
        }, {
            "id": "30609034",
            "name": "mpulse",
            "username": "mpulse7"
        }, {
            "id": "1219863707322286083",
            "name": "Bon Bon",
            "username": "BonBon74847325"
        }, {
            "id": "1036748495821070336",
            "name": "Crew Libertas",
            "username": "CrewLibertas"
        }, {
            "id": "861307069898665988",
            "name": "Katscan27",
            "username": "katscan27_kim"
        }, {
            "id": "1327561530058031110",
            "name": "Russell J Laing",
            "username": "RussellJLaing1"
        }, {
            "id": "13513922",
            "name": "JC Gonzalez!",
            "username": "gonjuanc"
        }, {
            "id": "1349956649965023232",
            "name": "Jasmine Dominguez",
            "username": "Jazzy120432"
        }, {
            "id": "768430854393753600",
            "name": "klara",
            "username": "klaracker"
        }, {
            "id": "197237293",
            "name": "HillaryS",
            "username": "stempleh"
        }, {
            "id": "1109045138398081024",
            "name": "duncanclements",
            "username": "duncanclements6"
        }, {
            "id": "2549100751",
            "name": "Jeremy Blumes",
            "username": "Coach_Blumes"
        }, {
            "id": "1362957755175350273",
            "name": "e",
            "username": "robomewl"
        }, {
            "id": "831894638109851648",
            "name": "\"QUI CUSTODIET, IPSO CUSTODES?\" - torrexx2003",
            "username": "torrexx2003"
        }, {
            "id": "1347235127924023301",
            "name": "lauren.",
            "username": "laurendearest"
        }, {
            "id": "3148723796",
            "name": "Conrad Veidt",
            "username": "ConradVeidtItIs"
        }, {
            "id": "814986849596899328",
            "name": "John  B17G",
            "username": "GregoryKC1"
        }, {
            "id": "913438862",
            "name": "Alina",
            "username": "AlinaLongXXX"
        }, {
            "id": "297015736",
            "name": "Manuel Argüelles",
            "username": "Manu_Arguelles"
        }, {
            "id": "2857237490",
            "name": "Tanner Scroggins",
            "username": "TScrogdog"
        }, {
            "id": "372041924",
            "name": "Duane Hayes",
            "username": "1953mdl"
        }, {
            "id": "727867464625836032",
            "name": "Storysmith",
            "username": "smithofstories"
        }, {
            "id": "1358514791149666305",
            "name": "Ben Cutter",
            "username": "BenCutter4"
        }, {
            "id": "3163937065",
            "name": "melanie smooter",
            "username": "DarthVsco"
        }, {
            "id": "859729270561587200",
            "name": "Republicans Overseas Thailand",
            "username": "RO_Thailand"
        }, {
            "id": "1260396143583862787",
            "name": "Earl",
            "username": "EMC_III"
        }, {
            "id": "1261299209409409024",
            "name": "Back To Sports",
            "username": "medialiedtoyou"
        }, {
            "id": "32677335",
            "name": "#BLM ✊\uD83C\uDFFB Sebastian \uD83D\uDE37 Peitsch \uD83C\uDF08",
            "username": "SPeitsch"
        }, {
            "id": "379218437",
            "name": "Prometheus Unbound",
            "username": "sszonke"
        }, {
            "id": "1360915644217180162",
            "name": "Helena \"Fehlerhafter Fakt\" Tulli",
            "username": "HelenaTulli"
        }, {
            "id": "208689388",
            "name": "Jane",
            "username": "Daiseyjane01"
        }, {
            "id": "252307931",
            "name": "Doug Brantley",
            "username": "doug1dad"
        }, {
            "id": "1338252805585428482",
            "name": "Marie",
            "username": "Ascheregen_"
        }, {
            "id": "2900480370",
            "name": "Rebekah Huang ن\uD83C\uDDFA\uD83C\uDDF8",
            "username": "HuangRebekah"
        }, {
            "id": "1175797901144051712",
            "name": "jordyn",
            "username": "ziptoid"
        }, {
            "id": "180885830",
            "name": "Carol Hunt",
            "username": "carolmhunt"
        }, {
            "id": "2229651353",
            "name": "Diane Keniston",
            "username": "diane_keniston"
        }, {
            "id": "1002679890368450562",
            "name": "marissa",
            "username": "rissaplz"
        }, {
            "id": "1327072937497792514",
            "name": "Back by Unpopular demand",
            "username": "cIassof20I3"
        }, {
            "id": "3411415827",
            "name": "Eric Hellwig",
            "username": "Coach_Hellwig"
        }, {
            "id": "3332258840",
            "name": "dumiii",
            "username": "uasquareong"
        }, {
            "id": "36135824",
            "name": "opal",
            "username": "s3xKitN"
        }, {
            "id": "1295950184883593216",
            "name": "Knives/Bonez",
            "username": "HomoBeanieChild"
        }, {
            "id": "721005460812361728",
            "name": "\uD83C\uDDEE\uD83C\uDDEA Minister of Fat Tits",
            "username": "tetraniii"
        }, {
            "id": "1212850997317394432",
            "name": "Ayup",
            "username": "toad_00"
        }, {
            "id": "1263434814",
            "name": "ceight",
            "username": "cait_valentine"
        }, {
            "id": "179880348",
            "name": "Adrian G. Castro",
            "username": "castrini760"
        }, {
            "id": "3131604880",
            "name": "GeetarMan301 \uD83D\uDE00",
            "username": "GeetarMan301"
        }, {
            "id": "193877462",
            "name": "Colin Schulz",
            "username": "ColinSchulz4"
        }, {
            "id": "719254050907254784",
            "name": "Rich Homie Rinn ✨",
            "username": "LianaDreams"
        }, {
            "id": "2288325620",
            "name": "Shalina Knight",
            "username": "Onceuponachange"
        }, {
            "id": "16151700",
            "name": "String of Pearls",
            "username": "Patrice822"
        }, {
            "id": "40325091",
            "name": "Janice Smith",
            "username": "tjssmith"
        }, {
            "id": "1340918671",
            "name": "Kristen",
            "username": "KrisTheFish"
        }, {
            "id": "17487771",
            "name": "Ryan",
            "username": "ryanfield"
        }, {
            "id": "1265107261401284608",
            "name": "jeff",
            "username": "Kaleb43672619"
        }, {
            "id": "1288205927892398082",
            "name": "Dalton",
            "username": "DaltonPitbulls"
        }, {
            "id": "265765404",
            "name": "Ivan",
            "username": "therunner93"
        }, {
            "id": "64448440",
            "name": "ANONYMOUS",
            "username": "mike_muniz"
        }, {
            "id": "885247046491549697",
            "name": "Harry Losier",
            "username": "HPLosier"
        }, {
            "id": "605001745",
            "name": "Mike",
            "username": "Spartanzealot9"
        }, {
            "id": "1352438965928914945",
            "name": "Night owl",
            "username": "DemerchantChris"
        }, {
            "id": "1136739103045705728",
            "name": "n***a tanden",
            "username": "tandenword"
        }, {
            "id": "1110598797997080576",
            "name": "\uD83C\uDF0A Aqua Pug \uD83D\uDC3E \uD83D\uDE37 #YesToNoCoViD \uD83C\uDF0D \uD83C\uDDFA\uD83C\uDDF3\uD83C\uDDEA\uD83C\uDDFA\uD83C\uDDEC\uD83C\uDDE7",
            "username": "Aqua_Pug_"
        }]
    },
    "meta": {
        "newest_id": "1367141600720277506",
        "oldest_id": "1367140744960565249",
        "result_count": 100,
        "next_token": "b26v89c19zqg8o3fosnu6iuun99rjt6eqxbdgngj9vszh"
    }
}