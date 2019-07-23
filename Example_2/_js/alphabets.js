/**
 * @package    Sort_Data - Alphabets (JavaScript)
 * @version    2.0
 * @date       Sun, 23 Jun 2019 13:18:51 +0100, Slovakia
 * @author     Robert Mesaros
 * @copyright  Copyright © 2019 Robert Mesaros, rmSOFT
 * @web        http://www.rmsoft.sk
 * @link       http://www.rmsoft.sk/en/portfolio/programming-work/web-services/data-sorting-in-slovak-and-czech-alphabet
 *
 * @donate     https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=BB4D8Y28YZDH6
 *
 * @license    MIT: http://mit-license.org/
 *             Permission is hereby granted, free of charge, to any person obtaining a copy of
 *             this software and associated documentation files (the "Software"), to deal in
 *             the Software without restriction, including without limitation the rights to use,
 *             copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the
 *             Software, and to permit persons to whom the Software is furnished to do so,
 *             subject to the following conditions:
 *
 *             The above copyright notice and this permission notice shall be
 *             included in all copies or substantial portions of the Software.
 *
 *             THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
 *             INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
 *             PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 *             HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 *             OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
 *             SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 * @code       text/javascript; charset=UTF-8
 */


// rozsahy ASCII tabulky
// let ASCII_01 = "";                               // Dec=0..31 [system]
// let ASCII_02 = " ";                              // Dec=32 [SPACE]
// let ASCII_03 = "!\"#$%&'()*+,-./";               // Dec=33..47
// let ASCII_04 = "0123456789";                     // Dec=48..57
// let ASCII_05 = ":;<=>?@";                        // Dec=58..64
// let ASCII_06 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";     // Dec=65..90
// let ASCII_07 = "[\\]^_`";                        // Dec=91..96
// let ASCII_08 = "abcdefghijklmnopqrstuvwxyz";     // Dec=97..122
// let ASCII_09 = "{|}~";                           // Dec=123..126
// let ASCII_10 = "";                               // Dec=127 [DEL]


// *************************************************************************************************************************
// 1                                 (medzera - cislice - velke a male znaky abecedy striedavo)
const objABC_sk_cz__0Aa = {
    // postupnost znakov triedenia (len informativne)
    info: 'space,0,1,2,3,4,5,6,7,8,9,A,a,Á,á,Ä,ä,B,b,C,c,Č,č,D,d,Ď,ď,Dz,dz,DZ,dZ,Dž,dž,DŽ,dŽ,E,e,É,é,Ě,ě,F,f,G,g,H,h,Ch,ch,CH,cH,I,i,Í,í,J,j,K,k,L,l,Ĺ,ĺ,Ľ,ľ,M,m,N,n,Ň,ň,O,o,Ó,ó,Ô,ô,Ö,ö,Ő,ő,P,p,Q,q,R,r,Ŕ,ŕ,Ř,ř,S,s,Š,š,T,t,Ť,ť,U,u,Ú,ú,Ů,ů,Ü,ü,Ű,ű,V,v,W,w,X,x,Y,y,Ý,ý,Z,z,Ž,ž',

    // kontinualne pole znakov triedenia (vsetky znaky mimo tohto pola budu zotriedene za danou postupnostou)
    chars: [
        ' ',
        '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
        'A', 'a', 'Á', 'á', 'Ä', 'ä', 'B', 'b', 'C', 'c', 'Č', 'č', 'D', 'd', 'Ď', 'ď', 'Dz', 'dz', 'DZ', 'dZ', 'Dž', 'dž', 'DŽ', 'dŽ', 'E', 'e', 'É', 'é', 'Ě', 'ě', 'F', 'f', 'G', 'g', 'H', 'h', 'Ch', 'ch', 'CH', 'cH', 'I', 'i', 'Í', 'í', 'J', 'j', 'K', 'k', 'L', 'l', 'Ĺ', 'ĺ', 'Ľ', 'ľ', 'M', 'm', 'N', 'n', 'Ň', 'ň', 'O', 'o', 'Ó', 'ó', 'Ô', 'ô', 'Ö', 'ö', 'Ő', 'ő', 'P', 'p', 'Q', 'q', 'R', 'r', 'Ŕ', 'ŕ', 'Ř', 'ř', 'S', 's', 'Š', 'š', 'T', 't', 'Ť', 'ť', 'U', 'u', 'Ú', 'ú', 'Ů', 'ů', 'Ü', 'ü', 'Ű', 'ű', 'V', 'v', 'W', 'w', 'X', 'x', 'Y', 'y', 'Ý', 'ý', 'Z', 'z', 'Ž', 'ž',
    ],

    // zahrnut do triedenia specialne znaky (napr. dz, dž, ch)
    spec: true,

    // rozlisovat velke a male pismena
    upper_lower: true,
};


// *************************************************************************************************************************
// 2                                 (medzera - cislice - male a velke znaky abecedy striedavo)
const objABC_sk_cz__0aA = {
    // postupnost znakov triedenia (len informativne)
    info: 'space,0,1,2,3,4,5,6,7,8,9,a,A,á,Á,ä,Ä,b,B,c,C,č,Č,d,D,ď,Ď,dz,Dz,dZ,DZ,dž,Dž,dŽ,DŽ,e,E,é,É,ě,Ě,f,F,g,G,h,H,ch,Ch,cH,CH,i,I,í,Í,j,J,k,K,l,L,ĺ,Ĺ,ľ,Ľ,m,M,n,N,ň,Ň,o,O,ó,Ó,ô,Ô,ö,Ö,ő,Ő,p,P,q,Q,r,R,ŕ,Ŕ,ř,Ř,s,S,š,Š,t,T,ť,Ť,u,U,ú,Ú,ů,Ů,ü,Ü,ű,Ű,v,V,w,W,x,X,y,Y,ý,Ý,z,Z,ž,Ž',

    // kontinualne pole znakov triedenia (vsetky znaky mimo tohto pola budu zotriedene za danou postupnostou)
    chars: [
        ' ',
        '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
        'a', 'A', 'á', 'Á', 'ä', 'Ä', 'b', 'B', 'c', 'C', 'č', 'Č', 'd', 'D', 'ď', 'Ď', 'dz', 'Dz', 'dZ', 'DZ', 'dž', 'Dž', 'dŽ', 'DŽ', 'e', 'E', 'é', 'É', 'ě', 'Ě', 'f', 'F', 'g', 'G', 'h', 'H', 'ch', 'Ch', 'cH', 'CH', 'i', 'I', 'í', 'Í', 'j', 'J', 'k', 'K', 'l', 'L', 'ĺ', 'Ĺ', 'ľ', 'Ľ', 'm', 'M', 'n', 'N', 'ň', 'Ň', 'o', 'O', 'ó', 'Ó', 'ô', 'Ô', 'ö', 'Ö', 'ő', 'Ő', 'p', 'P', 'q', 'Q', 'r', 'R', 'ŕ', 'Ŕ', 'ř', 'Ř', 's', 'S', 'š', 'Š', 't', 'T', 'ť', 'Ť', 'u', 'U', 'ú', 'Ú', 'ů', 'Ů', 'ü', 'Ü', 'ű', 'Ű', 'v', 'V', 'w', 'W', 'x', 'X', 'y', 'Y', 'ý', 'Ý', 'z', 'Z', 'ž', 'Ž',
    ],

    // zahrnut do triedenia specialne znaky (napr. dz, dž, ch)
    spec: true,

    // rozlisovat velke a male pismena
    upper_lower: true,
};


// *************************************************************************************************************************
// 3                                 (medzera - cislice - velke znaky abecedy - male znaky abecedy)
const objABC_sk_cz__0A_a = {
    // postupnost znakov triedenia (len informativne)
    info: 'space,0,1,2,3,4,5,6,7,8,9,A,Á,Ä,B,C,Č,D,Ď,Dz,DZ,Dž,DŽ,E,É,Ě,F,G,H,Ch,CH,I,Í,J,K,L,Ĺ,Ľ,M,N,Ň,O,Ó,Ô,Ö,Ő,P,Q,R,Ŕ,Ř,S,Š,T,Ť,U,Ú,Ů,Ü,Ű,V,W,X,Y,Ý,Z,Ž,a,á,ä,b,c,č,d,ď,dz,dZ,dž,dŽ,e,é,ě,f,g,h,ch,cH,i,í,j,k,l,ĺ,ľ,m,n,ň,o,ó,ô,ö,ő,p,q,r,ŕ,ř,s,š,t,ť,u,ú,ů,ü,ű,v,w,x,y,ý,z,ž',

    // kontinualne pole znakov triedenia (vsetky znaky mimo tohto pola budu zotriedene za danou postupnostou)
    chars: [
        ' ',
        '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
        'A', 'Á', 'Ä', 'B', 'C', 'Č', 'D', 'Ď', 'Dz', 'DZ', 'Dž', 'DŽ', 'E', 'É', 'Ě', 'F', 'G', 'H', 'Ch', 'CH', 'I', 'Í', 'J', 'K', 'L', 'Ĺ', 'Ľ', 'M', 'N', 'Ň', 'O', 'Ó', 'Ô', 'Ö', 'Ő', 'P', 'Q', 'R', 'Ŕ', 'Ř', 'S', 'Š', 'T', 'Ť', 'U', 'Ú', 'Ů', 'Ü', 'Ű', 'V', 'W', 'X', 'Y', 'Ý', 'Z', 'Ž',
        'a', 'á', 'ä', 'b', 'c', 'č', 'd', 'ď', 'dz', 'dZ', 'dž', 'dŽ', 'e', 'é', 'ě', 'f', 'g', 'h', 'ch', 'cH', 'i', 'í', 'j', 'k', 'l', 'ĺ', 'ľ', 'm', 'n', 'ň', 'o', 'ó', 'ô', 'ö', 'ő', 'p', 'q', 'r', 'ŕ', 'ř', 's', 'š', 't', 'ť', 'u', 'ú', 'ů', 'ü', 'ű', 'v', 'w', 'x', 'y', 'ý', 'z', 'ž',
    ],

    // zahrnut do triedenia specialne znaky (napr. dz, dž, ch)
    spec: true,

    // rozlisovat velke a male pismena
    upper_lower: true,
};


// *************************************************************************************************************************
// 4                                 (medzera - cislice - male znaky abecedy - velke znaky abecedy)
const objABC_sk_cz__0a_A = {
    // postupnost znakov triedenia (len informativne)
    info: 'space,0,1,2,3,4,5,6,7,8,9,a,á,ä,b,c,č,d,ď,dz,dZ,dž,dŽ,e,é,ě,f,g,h,ch,cH,i,í,j,k,l,ĺ,ľ,m,n,ň,o,ó,ô,ö,ő,p,q,r,ŕ,ř,s,š,t,ť,u,ú,ů,ü,ű,v,w,x,y,ý,z,ž,A,Á,Ä,B,C,Č,D,Ď,Dz,DZ,Dž,DŽ,E,É,Ě,F,G,H,Ch,CH,I,Í,J,K,L,Ĺ,Ľ,M,N,Ň,O,Ó,Ô,Ö,Ő,P,Q,R,Ŕ,Ř,S,Š,T,Ť,U,Ú,Ů,Ü,Ű,V,W,X,Y,Ý,Z,Ž',

    // kontinualne pole znakov triedenia (vsetky znaky mimo tohto pola budu zotriedene za danou postupnostou)
    chars: [
        ' ',
        '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
        'a', 'á', 'ä', 'b', 'c', 'č', 'd', 'ď', 'dz', 'dZ', 'dž', 'dŽ', 'e', 'é', 'ě', 'f', 'g', 'h', 'ch', 'cH', 'i', 'í', 'j', 'k', 'l', 'ĺ', 'ľ', 'm', 'n', 'ň', 'o', 'ó', 'ô', 'ö', 'ő', 'p', 'q', 'r', 'ŕ', 'ř', 's', 'š', 't', 'ť', 'u', 'ú', 'ů', 'ü', 'ű', 'v', 'w', 'x', 'y', 'ý', 'z', 'ž',
        'A', 'Á', 'Ä', 'B', 'C', 'Č', 'D', 'Ď', 'Dz', 'DZ', 'Dž', 'DŽ', 'E', 'É', 'Ě', 'F', 'G', 'H', 'Ch', 'CH', 'I', 'Í', 'J', 'K', 'L', 'Ĺ', 'Ľ', 'M', 'N', 'Ň', 'O', 'Ó', 'Ô', 'Ö', 'Ő', 'P', 'Q', 'R', 'Ŕ', 'Ř', 'S', 'Š', 'T', 'Ť', 'U', 'Ú', 'Ů', 'Ü', 'Ű', 'V', 'W', 'X', 'Y', 'Ý', 'Z', 'Ž',
    ],

    // zahrnut do triedenia specialne znaky (napr. dz, dž, ch)
    spec: true,

    // rozlisovat velke a male pismena
    upper_lower: true,
};


// *************************************************************************************************************************
// 5                                 (medzera - velke znaky anglickej abecedy - male znaky anglickej abecedy)
const objABC_en__A_a = {
    // postupnost znakov triedenia (len informativne)
    info: 'space,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z',

    // kontinualne pole znakov triedenia (vsetky znaky mimo tohto pola budu zotriedene za danou postupnostou)
    chars: [
        ' ',
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    ],

    // zahrnut do triedenia specialne znaky (napr. dz, dž, ch)
    spec: false,

    // rozlisovat velke a male pismena
    upper_lower: true,
};


// *************************************************************************************************************************
// 6                                 (ASCII)
const objABC__ASCII = {
    // postupnost znakov triedenia (len informativne)
    info: 'ASCII',

    // kontinualne pole znakov triedenia (vsetky znaky mimo tohto pola budu zotriedene za danou postupnostou)
    chars: [
    ],

    // zahrnut do triedenia specialne znaky (napr. dz, dž, ch)
    spec: false,

    // rozlisovat velke a male pismena
    upper_lower: true,
};


// *************************************************************************************************************************
// 7                                 (medzera - pomlcka - vlastne cislice - vlastne znaky abecedy :)
// Vlastna specifikacia triedenia :)
const objABC_sk_cz__Any = {
    // postupnost znakov triedenia (len informativne)
    info: 'space,-,0,2,4,6,8,A,B,C,X,Y,Z',

    // kontinualne pole znakov triedenia (vsetky znaky mimo tohto pola budu zotriedene za danou postupnostou)
    chars: [
        ' ',
        '-',
        '0', '2', '4', '6', '8',
        'A', 'B', 'C', 'X', 'Y', 'Z',
    ],

    // zahrnut do triedenia specialne znaky (napr. dz, dž, ch)
    spec: true,

    // rozlisovat velke a male pismena
    upper_lower: true,
};
