import { Grid, Typography } from "@mui/material";

const TattooTreatment = () => {
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center', background: 'rgba(51, 51, 51, 0.8)', alignItems: 'center', height: '80vh', marginTop: '32px', margin: '0 128px', width: 'calc(100% - 256px)' }}>
        <div style={{ textAlign: 'center', maxWidth: '600px' }}>
          <Typography variant="h3" color={'white'}>
            טיפול בקעקוע חדש
          </Typography>
          <br />
          <Typography color={'white'}>
             להוריד את הניילון/פד לאחר שעתיים  מסיום הקעקוע ואז לשטוף עם מים קרים/פושרים וסבון •
            <br />
            <br />
            יום לאחר הקעקוע למרוח שכבה דקה של בפנטן פלוס. שלוש פעמים ביום במשך שבועיים •   
            <br />
            <br />
            יש להמנע מחשיפה לשמש או מכניסה לים/בריכה/ג’קוזי/סאונה למשך שבועיים-שלושה •
            <br />
            <br />
            להימנע ככל האפשר מלהזיע במשך שבוע מתחילת הקעקוע •
            <br/>
            <br/>
            יש להימנע מלגרד/לשפשף את האיזור על מנת לתת לפצע להחלים כראוי •
            <br/>
            <br/>
            במידה ויש צורך בתיקון הקעקוע לאחר החלמה, ניתן להגיע עד 3 חודשים, בתיאום מראש •
            <br />
            <br />
            <br />
            <br />
            (: אם יש שאלות מוזמנים לכתוב לי תמיד
          </Typography>
          
        </div>
      </div>
    </>
  );
};

export default TattooTreatment;
