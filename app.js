/* ========================================
   Happy Work — Application Logic
   ======================================== */

// ────────── DATA ──────────

const counselors = [
  {
    id:1, name:'ดร.สมหญิง วิชัยดิษฐ์', title:'นักจิตวิทยาคลินิก',
    avatar:'ส', gradient:'linear-gradient(135deg,#7EC8E3,#5BB5D5)',
    expertise:['Burnout','ความเครียดจากงาน','Work-Life Balance'],
    phone:'02-xxx-xxxx', email:'somying@happywork.co', line:'@dr.somying',
    bio:'ประสบการณ์ 15 ปี ด้านจิตวิทยาองค์กรและการให้คำปรึกษาคนทำงาน'
  },
  {
    id:2, name:'อ.วรพล จิตสงบ', title:'นักจิตวิทยาการปรึกษา',
    avatar:'ว', gradient:'linear-gradient(135deg,#6BBF72,#4CAF50)',
    expertise:['ปัญหากับหัวหน้า','ความขัดแย้งกับเพื่อนร่วมงาน','การสื่อสารในองค์กร'],
    phone:'02-xxx-xxxx', email:'worapol@happywork.co', line:'@worapol.mind',
    bio:'ผู้เชี่ยวชาญด้านความสัมพันธ์ในที่ทำงานและการจัดการความขัดแย้ง'
  },
  {
    id:3, name:'พญ.ปรียา ใจดี', title:'จิตแพทย์',
    avatar:'ป', gradient:'linear-gradient(135deg,#D9C4FF,#A78BFA)',
    expertise:['ภาวะซึมเศร้า','ความวิตกกังวล','Burnout','การจัดการอารมณ์'],
    phone:'02-xxx-xxxx', email:'preeya@happywork.co', line:'@dr.preeya',
    bio:'จิตแพทย์เฉพาะทาง มุ่งเน้นดูแลสุขภาพจิตคนวัยทำงาน'
  },
  {
    id:4, name:'คุณนภา ชีวาสุข', title:'Life Coach & Counselor',
    avatar:'น', gradient:'linear-gradient(135deg,#F4A896,#E8876E)',
    expertise:['Work-Life Balance','การพัฒนาตนเอง','ความเครียดจากงาน','การวางแผนอาชีพ'],
    phone:'02-xxx-xxxx', email:'napa@happywork.co', line:'@napa.coach',
    bio:'Life Coach ที่ช่วยให้คุณค้นพบสมดุลระหว่างชีวิตการทำงานและชีวิตส่วนตัว'
  },
  {
    id:5, name:'ดร.ธีรวัฒน์ สุขสันต์', title:'นักจิตวิทยาองค์กร',
    avatar:'ธ', gradient:'linear-gradient(135deg,#FFE082,#FFB300)',
    expertise:['Burnout','ความเครียดจากงาน','การบริหารเวลา','Productivity'],
    phone:'02-xxx-xxxx', email:'teerawat@happywork.co', line:'@dr.teerawat',
    bio:'ผู้เชี่ยวชาญด้านจิตวิทยาองค์กร ช่วยให้คนทำงานมีประสิทธิภาพอย่างมีความสุข'
  },
  {
    id:6, name:'อ.มณีรัตน์ แก้วใส', title:'นักจิตวิทยาการปรึกษา',
    avatar:'ม', gradient:'linear-gradient(135deg,#A8D8EA,#6BBF72)',
    expertise:['ความขัดแย้งกับเพื่อนร่วมงาน','ปัญหากับหัวหน้า','ภาวะซึมเศร้า','Work-Life Balance'],
    phone:'02-xxx-xxxx', email:'maneerat@happywork.co', line:'@maneerat.psy',
    bio:'มุ่งเน้นการให้คำปรึกษาแบบองค์รวม ดูแลทั้งจิตใจและความสัมพันธ์ในที่ทำงาน'
  }
];

// ST-5 (แบบคัดกรองภาวะเครียด สวนปรุง, กรมสุขภาพจิต)
const stressQuestions = [
  { text:'ในช่วง 2-4 สัปดาห์ที่ผ่านมา คุณมีปัญหาการนอน เช่น นอนไม่หลับ หลับยาก หรือนอนมากเกินไป', category:'sleep' },
  { text:'ในช่วง 2-4 สัปดาห์ที่ผ่านมา คุณรู้สึกว่ามีสมาธิน้อยลง ทำงานผิดพลาดบ่อย หรือจดจ่อกับสิ่งใดสิ่งหนึ่งได้ยาก', category:'focus' },
  { text:'ในช่วง 2-4 สัปดาห์ที่ผ่านมา คุณรู้สึกหงุดหงิดง่าย กระวนกระวาย ว้าวุ่นใจ หรือไม่สบายใจ', category:'irritability' },
  { text:'ในช่วง 2-4 สัปดาห์ที่ผ่านมา คุณรู้สึกเบื่อหน่าย เซ็ง ท้อแท้ หรือหมดแรงจูงใจ', category:'boredom' },
  { text:'ในช่วง 2-4 สัปดาห์ที่ผ่านมา คุณไม่อยากพบปะผู้คน อยากอยู่คนเดียว หรือหลีกเลี่ยงการเข้าสังคม', category:'isolation' }
];

const stressOptions = [
  { label:'ไม่เลย', value:0 },
  { label:'เล็กน้อย', value:1 },
  { label:'ปานกลาง', value:2 },
  { label:'มาก', value:3 }
];

const articles = [
  {
    id:1, category:'burnout',
    emoji:'🔥',
    bg:'linear-gradient(135deg,#FFE0B2,#FFAB91)',
    title:'Burnout คืออะไร? 5 สัญญาณเตือนที่คนทำงานต้องรู้',
    summary:'ภาวะหมดไฟ (Burnout) ไม่ใช่แค่ความเหนื่อย แต่เป็นภาวะที่ส่งผลกระทบต่อทั้งร่างกายและจิตใจ มาเรียนรู้สัญญาณเตือน 5 ข้อ เพื่อรับมือก่อนสาย',
    content:`<h2>Burnout คืออะไร?</h2>
<p>ภาวะหมดไฟ (Burnout Syndrome) คือภาวะที่เกิดจากความเครียดสะสมในการทำงานเป็นระยะเวลานาน จนทำให้รู้สึกหมดแรง หมดใจ และขาดแรงจูงใจในการทำงาน องค์การอนามัยโลก (WHO) ได้จัดให้ Burnout เป็นปรากฏการณ์ที่เกี่ยวข้องกับการทำงาน (Occupational phenomenon) ในปี 2019</p>

<h2>5 สัญญาณเตือนที่ต้องสังเกต</h2>
<ul>
<li><strong>เหนื่อยล้าตลอดเวลา</strong> — รู้สึกหมดแรงทั้งร่างกายและจิตใจ แม้จะพักผ่อนเพียงพอแล้วก็ตาม</li>
<li><strong>รู้สึกแยกตัวจากงาน</strong> — ไม่มีความรู้สึกร่วมกับงานที่ทำ รู้สึกเฉื่อยชา ไม่สนใจผลลัพธ์</li>
<li><strong>ประสิทธิภาพการทำงานลดลง</strong> — ทำงานผิดพลาดบ่อย สมาธิสั้น ตัดสินใจได้ยาก</li>
<li><strong>อารมณ์แปรปรวน</strong> — หงุดหงิดง่าย ร้องไห้โดยไม่มีเหตุผล หรือรู้สึกว่างเปล่า</li>
<li><strong>อาการทางกาย</strong> — ปวดหัวบ่อย นอนไม่หลับ กินมากหรือกินน้อยผิดปกติ</li>
</ul>

<h2>วิธีรับมือเบื้องต้น</h2>
<p>หากคุณพบว่าตัวเองมีสัญญาณข้างต้น ลองเริ่มจากการ:</p>
<ul>
<li>ตั้งขอบเขตเวลาทำงานที่ชัดเจน</li>
<li>พักผ่อนให้เพียงพอ และหาเวลาทำกิจกรรมที่ชอบ</li>
<li>พูดคุยกับคนที่ไว้ใจได้ อย่าเก็บปัญหาไว้คนเดียว</li>
<li>พิจารณาปรึกษาผู้เชี่ยวชาญด้านสุขภาพจิต</li>
</ul>`
  },
  {
    id:2, category:'stress',
    emoji:'🧘',
    bg:'linear-gradient(135deg,#C8E6C9,#A5D6A7)',
    title:'5 เทคนิคจัดการความเครียด ทำได้ทันทีที่โต๊ะทำงาน',
    summary:'เทคนิคง่าย ๆ ที่สามารถทำได้ทันทีเมื่อรู้สึกเครียดในที่ทำงาน ตั้งแต่การหายใจ ไปจนถึงการจัดระเบียบความคิด',
    content:`<h2>ทำไมต้องจัดการความเครียดตั้งแต่เนิ่น ๆ?</h2>
<p>ความเครียดเป็นเรื่องปกติของชีวิตการทำงาน แต่หากปล่อยไว้นานเกินไป อาจนำไปสู่ปัญหาสุขภาพทั้งทางร่างกายและจิตใจ การจัดการความเครียดจึงเป็นทักษะสำคัญที่ทุกคนควรมี</p>

<h2>5 เทคนิคที่ทำได้ทันที</h2>
<ul>
<li><strong>เทคนิคหายใจ 4-7-8</strong> — หายใจเข้า 4 วินาที กลั้น 7 วินาที หายใจออก 8 วินาที ทำซ้ำ 3-4 รอบ</li>
<li><strong>Grounding 5-4-3-2-1</strong> — มอง 5 สิ่ง สัมผัส 4 สิ่ง ฟัง 3 เสียง ดม 2 กลิ่น ชิม 1 รส เพื่อดึงตัวเองกลับมาอยู่กับปัจจุบัน</li>
<li><strong>ยืดเหยียดร่างกาย</strong> — ลุกขึ้นยืดแขน หมุนคอ บิดลำตัว ช่วยให้เลือดไหลเวียนและผ่อนคลายกล้ามเนื้อ</li>
<li><strong>เขียน Brain Dump</strong> — เขียนทุกอย่างที่คิดลงกระดาษ ไม่ต้องเรียบเรียง แค่ปล่อยออกมา</li>
<li><strong>ฟังเพลงผ่อนคลาย</strong> — ใส่หูฟังฟังเพลงที่ชอบ 5-10 นาที ช่วยลดฮอร์โมนความเครียดได้จริง</li>
</ul>

<h2>สิ่งสำคัญ</h2>
<p>หากคุณรู้สึกว่าความเครียดรุนแรงจนส่งผลกระทบต่อชีวิตประจำวัน ไม่ต้องลังเลที่จะขอความช่วยเหลือจากผู้เชี่ยวชาญ</p>`
  },
  {
    id:3, category:'workplace',
    emoji:'🤝',
    bg:'linear-gradient(135deg,#B3E5FC,#81D4FA)',
    title:'จัดการความขัดแย้งในที่ทำงานอย่างสร้างสรรค์',
    summary:'ความขัดแย้งในที่ทำงานเป็นเรื่องปกติ แต่การจัดการอย่างถูกวิธีจะช่วยให้ทีมแข็งแกร่งขึ้น เรียนรู้เทคนิคที่นำไปใช้ได้จริง',
    content:`<h2>ความขัดแย้ง ≠ สิ่งเลวร้ายเสมอไป</h2>
<p>ความขัดแย้งในที่ทำงานเป็นสิ่งที่เกิดขึ้นได้ตามธรรมชาติ เมื่อคนที่มีความคิด ประสบการณ์ และมุมมองต่างกันมาทำงานร่วมกัน สิ่งสำคัญคือวิธีที่เราจัดการกับมัน</p>

<h2>เทคนิคการจัดการความขัดแย้ง</h2>
<ul>
<li><strong>ฟังอย่างตั้งใจ (Active Listening)</strong> — ตั้งใจฟังอีกฝ่ายจนจบ ก่อนที่จะตอบ</li>
<li><strong>ใช้ "I-Statement"</strong> — พูดจากมุมตัวเอง เช่น "ฉันรู้สึก..." แทนการกล่าวโทษอีกฝ่าย</li>
<li><strong>มุ่งเน้นปัญหา ไม่ใช่ตัวบุคคล</strong> — แยกปัญหาออกจากคน โฟกัสที่การหาทางออกร่วมกัน</li>
<li><strong>หาจุดร่วม</strong> — ค้นหาเป้าหมายที่ทั้งสองฝ่ายเห็นพ้องต้องกัน แล้วเริ่มจากตรงนั้น</li>
<li><strong>ขอความช่วยเหลือจากบุคคลที่สาม</strong> — หากไม่สามารถแก้ไขได้ด้วยตัวเอง อย่าลังเลที่จะขอความช่วยเหลือ</li>
</ul>

<h2>เมื่อไหร่ควรขอความช่วยเหลือ?</h2>
<p>หากความขัดแย้งส่งผลกระทบต่อสุขภาพจิตของคุณ เช่น นอนไม่หลับ เครียดจนไม่อยากไปทำงาน หรือรู้สึกวิตกกังวลตลอดเวลา ควรพิจารณาปรึกษาผู้เชี่ยวชาญ</p>`
  },
  {
    id:4, category:'self-care',
    emoji:'💚',
    bg:'linear-gradient(135deg,#E1BEE7,#CE93D8)',
    title:'Self-Care สำหรับคนทำงาน: ดูแลตัวเองง่าย ๆ ทุกวัน',
    summary:'การดูแลตัวเองไม่จำเป็นต้องทำอะไรใหญ่โต แค่เริ่มจากสิ่งเล็ก ๆ ที่ทำได้ทุกวัน ก็ช่วยให้สุขภาพจิตดีขึ้นได้',
    content:`<h2>Self-Care คืออะไร?</h2>
<p>Self-Care คือการดูแลตัวเองอย่างจงใจ ทั้งทางร่างกาย จิตใจ และอารมณ์ ไม่ใช่ความเห็นแก่ตัว แต่เป็นสิ่งจำเป็นเพื่อให้คุณมีพลังในการดูแลทั้งตัวเองและคนรอบข้าง</p>

<h2>กิจกรรม Self-Care ที่ทำได้ทุกวัน</h2>
<ul>
<li><strong>ตื่นเช้ากว่าปกติ 15 นาที</strong> — ใช้เวลานี้กับตัวเอง อ่านหนังสือ นั่งสมาธิ หรือจิบกาแฟ</li>
<li><strong>เขียน Gratitude Journal</strong> — เขียนสิ่งที่รู้สึกขอบคุณ 3 ข้อทุกวัน</li>
<li><strong>ออกกำลังกายเบา ๆ</strong> — เดิน 20 นาที ยืดเหยียด หรือโยคะ</li>
<li><strong>วาง Digital Boundary</strong> — กำหนดเวลาไม่ใช้โทรศัพท์ เช่น 1 ชั่วโมงก่อนนอน</li>
<li><strong>พูดคุยกับคนที่รัก</strong> — การเชื่อมต่อกับคนสำคัญช่วยเติมพลังจิตใจ</li>
</ul>

<h2>จำไว้ว่า...</h2>
<p>คุณไม่จำเป็นต้องรอจนหมดแรงแล้วค่อยดูแลตัวเอง การดูแลตัวเองเป็นประจำคือการป้องกันที่ดีที่สุด</p>`
  },
  {
    id:5, category:'stress',
    emoji:'😴',
    bg:'linear-gradient(135deg,#BBDEFB,#90CAF9)',
    title:'นอนไม่หลับเพราะเครียดงาน? วิธีแก้ที่ได้ผลจริง',
    summary:'ปัญหาการนอนไม่หลับเป็นผลกระทบที่พบบ่อยจากความเครียดในการทำงาน มาดูวิธีแก้ที่ได้ผลจริงจากผู้เชี่ยวชาญ',
    content:`<h2>ทำไมความเครียดถึงทำให้นอนไม่หลับ?</h2>
<p>เมื่อเราเครียด ร่างกายจะหลั่งฮอร์โมนคอร์ติซอล (Cortisol) ซึ่งทำให้ร่างกายตื่นตัว สมองทำงานมากเกินไป จนไม่สามารถผ่อนคลายเพื่อเข้าสู่โหมดหลับได้</p>

<h2>วิธีแก้ที่ได้ผลจริง</h2>
<ul>
<li><strong>Sleep Hygiene</strong> — นอน-ตื่นเวลาเดียวกันทุกวัน ห้องนอนมืดและเย็น</li>
<li><strong>หลีกเลี่ยงหน้าจอ 1 ชม.ก่อนนอน</strong> — แสงสีฟ้ากระตุ้นให้สมองตื่นตัว</li>
<li><strong>เขียน To-Do List ก่อนนอน</strong> — ย้ายความกังวลออกจากหัวลงกระดาษ</li>
<li><strong>เทคนิค Progressive Muscle Relaxation</strong> — เกร็งและคลายกล้ามเนื้อทีละส่วน</li>
<li><strong>จำกัดคาเฟอีนหลังเที่ยง</strong> — คาเฟอีนอยู่ในร่างกายนานถึง 8 ชม.</li>
</ul>

<h2>เมื่อไหร่ควรพบแพทย์?</h2>
<p>หากนอนไม่หลับติดต่อกันนานกว่า 2 สัปดาห์ หรือส่งผลกระทบต่อการทำงานและชีวิตประจำวัน ควรปรึกษาแพทย์หรือผู้เชี่ยวชาญ</p>`
  },
  {
    id:6, category:'burnout',
    emoji:'🔋',
    bg:'linear-gradient(135deg,#FFF9C4,#FFF176)',
    title:'ฟื้นฟูพลังใจหลัง Burnout: 7 ขั้นตอนกลับมาเป็นตัวเอง',
    summary:'หลังจากผ่าน Burnout มาแล้ว การฟื้นฟูจิตใจต้องใช้เวลาและวิธีการที่เหมาะสม มาดู 7 ขั้นตอนที่ช่วยให้คุณกลับมาเป็นตัวเอง',
    content:`<h2>การฟื้นตัวจาก Burnout ต้องใช้เวลา</h2>
<p>Burnout ไม่ใช่สิ่งที่จะหายไปเพียงแค่ไปเที่ยวพักผ่อนสุดสัปดาห์ การฟื้นตัวต้องอาศัยการเปลี่ยนแปลงอย่างมีระบบ</p>

<h2>7 ขั้นตอนฟื้นฟู</h2>
<ul>
<li><strong>ยอมรับสถานการณ์</strong> — รับรู้ว่าคุณกำลังประสบ Burnout ไม่ต้องโทษตัวเอง</li>
<li><strong>หาสาเหตุที่แท้จริง</strong> — วิเคราะห์ว่าอะไรเป็นตัวกระตุ้นหลัก</li>
<li><strong>กำหนดขอบเขตใหม่</strong> — เรียนรู้ที่จะปฏิเสธและตั้งขอบเขตที่ชัดเจน</li>
<li><strong>ลดภาระงาน</strong> — จัดลำดับความสำคัญ ปล่อยวางสิ่งที่ไม่จำเป็น</li>
<li><strong>เติมพลังด้วยกิจกรรมที่รัก</strong> — กลับไปทำสิ่งที่เคยทำแล้วมีความสุข</li>
<li><strong>สร้าง Support System</strong> — ล้อมรอบตัวเองด้วยคนที่เข้าใจและสนับสนุน</li>
<li><strong>ปรึกษาผู้เชี่ยวชาญ</strong> — อย่าลังเลที่จะขอความช่วยเหลือจากมืออาชีพ</li>
</ul>

<h2>อย่าลืม</h2>
<p>การพักผ่อนไม่ใช่ความขี้เกียจ แต่เป็นการลงทุนในตัวเอง คุณสมควรได้รับการดูแล</p>`
  }
];

const emergencyContacts = [
  {
    name:'สายด่วนสุขภาพจิต กรมสุขภาพจิต',
    number:'1323',
    location:'กระทรวงสาธารณสุข',
    hours:'บริการ 24 ชั่วโมง ทุกวัน',
    icon:'coral',
    type:'hotline'
  },
  {
    name:'สายด่วนป้องกันการฆ่าตัวตาย',
    number:'1388',
    location:'กระทรวงสาธารณสุข',
    hours:'บริการ 24 ชั่วโมง ทุกวัน',
    icon:'coral',
    type:'hotline'
  },
  {
    name:'โรงพยาบาลมนารมย์',
    number:'02-725-9595',
    number2:'02-032-9595',
    location:'เขตบางนา กรุงเทพฯ',
    hours:'จันทร์ - อาทิตย์ 08:00 - 20:00 น.',
    icon:'blue',
    type:'clinic'
  },
  {
    name:'กายใจคลินิก (Body and Mind Clinic)',
    number:'093-332-2511',
    location:'อาคารจัตุรัสจามจุรี ชั้น 2 เขตปทุมวัน กรุงเทพฯ',
    hours:'จันทร์ - เสาร์ 09:00 - 18:00 น.',
    icon:'green',
    type:'clinic'
  },
  {
    name:'ปีติ คลินิก (Piti Clinic)',
    number:'090-230-6000',
    location:'กรุงเทพฯ',
    hours:'จันทร์ - เสาร์ 09:00 - 18:00 น.',
    line:'@piticlinic',
    icon:'lavender',
    type:'clinic'
  }
];


// ────────── STATE ──────────
let currentPage = 'home';
let testState = { currentQ:0, answers:[], started:false, completed:false };

// ────────── NAVIGATION ──────────
function navigate(page, pushState=true) {
  // close mobile menu
  document.getElementById('navLinks').classList.remove('open');
  document.getElementById('hamburger').classList.remove('open');

  // hide all pages
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));

  // show target
  const target = document.getElementById('page-'+page);
  if(target) {
    target.classList.add('active');
    target.style.animation='none';
    void target.offsetHeight; // reflow
    target.style.animation='';
  }

  // update nav active
  document.querySelectorAll('.nav-links a').forEach(a=>{
    a.classList.toggle('active', a.dataset.page===page);
  });

  currentPage = page;
  if(pushState) window.location.hash = page;
  window.scrollTo({top:0,behavior:'smooth'});

  // render page-specific content
  if(page==='counselor') renderCounselors();
  if(page==='stress-test') renderStressTest();
  if(page==='articles') renderArticles();
  if(page==='login') renderLogin();
  if(page==='emergency') renderEmergency();
}

function toggleMenu(){
  document.getElementById('navLinks').classList.toggle('open');
  document.getElementById('hamburger').classList.toggle('open');
}

// Navbar scroll effect
window.addEventListener('scroll',()=>{
  document.getElementById('navbar').classList.toggle('scrolled',window.scrollY>20);
});

// Hash routing
window.addEventListener('hashchange',()=>{
  const hash = window.location.hash.slice(1) || 'home';
  if(hash!==currentPage) navigate(hash, false);
});

// Init
window.addEventListener('DOMContentLoaded',()=>{
  const hash = window.location.hash.slice(1) || 'home';
  if(hash!=='home') navigate(hash, false);
  renderQuickConsult();
});


// ────────── COUNSELOR PAGE ──────────
function renderCounselors(filter=''){
  const grid = document.getElementById('counselorGrid');
  const filtered = counselors.filter(c=>{
    if(!filter) return true;
    const s = filter.toLowerCase();
    return c.name.toLowerCase().includes(s) ||
           c.expertise.some(e=>e.toLowerCase().includes(s)) ||
           c.title.toLowerCase().includes(s);
  });

  grid.innerHTML = filtered.length ? filtered.map((c,i)=>`
    <div class="counselor-card" style="animation-delay:${i*.08}s">
      <div class="counselor-top">
        <div class="counselor-avatar" style="background:${c.gradient}">${c.avatar}</div>
        <div class="counselor-info">
          <h3>${c.name}</h3>
          <p class="title">${c.title}</p>
        </div>
      </div>
      <p style="font-size:.88rem;color:var(--text-light);margin-bottom:12px">${c.bio}</p>
      <div class="counselor-expertise">
        ${c.expertise.map(e=>`<span>${e}</span>`).join('')}
      </div>
      <div class="counselor-contact">
        <a href="tel:${c.phone.replace(/-/g,'')}">📞 โทร</a>
        <a href="mailto:${c.email}">📧 อีเมล</a>
        <a href="https://line.me/R/ti/p/${c.line}" target="_blank" rel="noopener">💬 LINE</a>
      </div>
    </div>
  `).join('') : `
    <div style="grid-column:1/-1;text-align:center;padding:60px 20px;color:var(--text-muted)">
      <div style="font-size:3rem;margin-bottom:12px">🔍</div>
      <p style="font-size:1.1rem">ไม่พบที่ปรึกษาที่ตรงกับคำค้นหา</p>
      <p style="font-size:.9rem;margin-top:8px">ลองค้นหาด้วยคำอื่น หรือเลือกหมวดหมู่ด้านบน</p>
    </div>`;
}

function filterCounselors(){
  const val = document.getElementById('counselorSearch').value;
  renderCounselors(val);
}

function searchTag(btn, tag){
  document.querySelectorAll('.search-tags button').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('counselorSearch').value = tag;
  renderCounselors(tag);
}


// ────────── STRESS TEST ──────────
function renderStressTest(){
  const container = document.getElementById('testContainer');
  if(testState.completed){
    showResult();
    return;
  }
  if(!testState.started){
    container.innerHTML = `
      <div class="test-intro">
        <h2>📋 แบบคัดกรองภาวะเครียด (ST-5)</h2>
        <p>แบบคัดกรองนี้พัฒนาโดยกรมสุขภาพจิต กระทรวงสาธารณสุข ใช้เวลาประมาณ 2-3 นาที</p>
        <div class="accent-line" style="margin:16px auto"></div>
      </div>
      <div class="test-warning">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
        <div>
          <strong>ข้อสำคัญ:</strong> แบบประเมินนี้เป็นเพียงเครื่องมือคัดกรองเบื้องต้นเท่านั้น <strong>ไม่ใช่การวินิจฉัยทางการแพทย์</strong> หากมีข้อกังวล กรุณาปรึกษาผู้เชี่ยวชาญด้านสุขภาพจิต
        </div>
      </div>
      <div style="background:var(--white);border:1px solid var(--border);border-radius:var(--r-lg);padding:32px;margin-top:24px">
        <h3 style="font-size:1.1rem;margin-bottom:16px">📝 คำอธิบาย</h3>
        <p style="color:var(--text-light);font-size:.92rem;margin-bottom:12px">แบบคัดกรองนี้ประกอบด้วย <strong>5 ข้อ</strong> แต่ละข้อถามเกี่ยวกับอาการที่คุณอาจพบในช่วง <strong>2-4 สัปดาห์ที่ผ่านมา</strong></p>
        <p style="color:var(--text-light);font-size:.92rem;margin-bottom:24px">ตอบตามความรู้สึกจริงของคุณ ไม่มีคำตอบถูกหรือผิด ข้อมูลของคุณจะไม่ถูกจัดเก็บ</p>
        <button class="btn btn-primary" onclick="startTest()" style="width:100%;justify-content:center">
          เริ่มทำแบบประเมิน →
        </button>
      </div>`;
    return;
  }
  showQuestion();
}

function startTest(){
  testState = { currentQ:0, answers:new Array(stressQuestions.length).fill(-1), started:true, completed:false };
  showQuestion();
}

function showQuestion(){
  const container = document.getElementById('testContainer');
  const q = testState.currentQ;
  const total = stressQuestions.length;
  const pct = ((q)/total)*100;
  const answered = testState.answers[q];

  container.innerHTML = `
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">
      <span style="font-size:.85rem;color:var(--text-muted)">ข้อ ${q+1} จาก ${total}</span>
      <span style="font-size:.85rem;color:var(--text-muted)">${Math.round(pct)}%</span>
    </div>
    <div class="progress-bar"><div class="progress-fill" style="width:${pct}%"></div></div>
    <div class="question-card">
      <div class="q-number">คำถามข้อที่ ${q+1}</div>
      <div class="q-text">${stressQuestions[q].text}</div>
      <div class="options">
        ${stressOptions.map(o=>`
          <button class="option-btn ${answered===o.value?'selected':''}" onclick="selectOption(${o.value})">
            ${o.label}
          </button>
        `).join('')}
      </div>
    </div>
    <div class="test-nav">
      <button class="btn btn-outline btn-sm" onclick="${q>0?'prevQuestion()':'resetTest()'}" ${q===0?'style="opacity:.5"':''}>
        ← ${q>0?'ข้อก่อนหน้า':'กลับ'}
      </button>
      <button class="btn btn-primary btn-sm" onclick="nextQuestion()" ${answered===-1?'disabled style="opacity:.4;pointer-events:none"':''}>
        ${q===total-1?'ดูผลลัพธ์ →':'ข้อถัดไป →'}
      </button>
    </div>`;
}

function selectOption(value){
  testState.answers[testState.currentQ] = value;
  showQuestion();
}

function nextQuestion(){
  if(testState.answers[testState.currentQ]===-1) return;
  if(testState.currentQ < stressQuestions.length-1){
    testState.currentQ++;
    showQuestion();
  } else {
    testState.completed = true;
    showResult();
  }
}

function prevQuestion(){
  if(testState.currentQ>0){
    testState.currentQ--;
    showQuestion();
  }
}

function resetTest(){
  testState = { currentQ:0, answers:[], started:false, completed:false };
  renderStressTest();
}

function showResult(){
  const container = document.getElementById('testContainer');
  const total = testState.answers.reduce((a,b)=>a+b,0);
  let level, levelClass, icon, advice;

  if(total<=4){
    level='เครียดน้อย (ปกติ)';
    levelClass='low';
    icon='😊';
    advice=`<p><strong>ผลประเมิน:</strong> ระดับความเครียดของคุณอยู่ในเกณฑ์ปกติ</p>
<p>คุณดูแลสุขภาพจิตได้ดีมาก! แนะนำให้รักษาสมดุลชีวิตที่ดีไว้ และหากมีเรื่องใดที่กังวลใจ อย่าลังเลที่จะพูดคุยกับคนที่ไว้ใจ</p>
<p>💡 <strong>คำแนะนำ:</strong> ออกกำลังกายสม่ำเสมอ พักผ่อนให้เพียงพอ และทำกิจกรรมที่ชอบ</p>`;
  } else if(total<=7){
    level='เครียดปานกลาง';
    levelClass='moderate';
    icon='😐';
    advice=`<p><strong>ผลประเมิน:</strong> คุณมีความเครียดในระดับปานกลาง</p>
<p>ความเครียดระดับนี้ยังจัดการได้ด้วยตัวเอง แต่ควรเริ่มหาวิธีผ่อนคลายและดูแลตัวเองมากขึ้น</p>
<p>💡 <strong>คำแนะนำ:</strong></p>
<ul style="padding-left:20px;margin-top:8px"><li>ฝึกเทคนิคหายใจเพื่อผ่อนคลาย</li><li>จัดเวลาพักผ่อนให้เพียงพอ</li><li>พูดคุยกับคนที่ไว้ใจ</li><li>ลองอ่านบทความเกี่ยวกับการจัดการความเครียด</li></ul>`;
  } else if(total<=11){
    level='เครียดมาก';
    levelClass='high';
    icon='😟';
    advice=`<p><strong>ผลประเมิน:</strong> คุณมีความเครียดในระดับสูง</p>
<p>ความเครียดระดับนี้อาจส่งผลกระทบต่อสุขภาพร่างกายและจิตใจ <strong>แนะนำอย่างยิ่งให้ปรึกษาผู้เชี่ยวชาญ</strong></p>
<p>💡 <strong>คำแนะนำ:</strong></p>
<ul style="padding-left:20px;margin-top:8px"><li>นัดพบผู้เชี่ยวชาญด้านสุขภาพจิต</li><li>พูดคุยกับคนที่ไว้ใจเกี่ยวกับสิ่งที่คุณรู้สึก</li><li>พยายามพักผ่อนให้เพียงพอ</li><li>หากรู้สึกท่วมท้น โทรสายด่วนสุขภาพจิต 1323</li></ul>`;
  } else {
    level='เครียดมากที่สุด';
    levelClass='critical';
    icon='😢';
    advice=`<p><strong>ผลประเมิน:</strong> คุณมีความเครียดในระดับสูงมาก</p>
<p><strong>กรุณาปรึกษาผู้เชี่ยวชาญด้านสุขภาพจิตโดยเร็ว</strong> อย่าเก็บปัญหาไว้คนเดียว มีคนพร้อมช่วยเหลือคุณ</p>
<p>📞 <strong>สายด่วนสุขภาพจิต:</strong> <a href="tel:1323" style="color:var(--coral-500);font-weight:600">โทร 1323</a> (บริการ 24 ชม.)</p>
<p>💡 <strong>คำแนะนำเร่งด่วน:</strong></p>
<ul style="padding-left:20px;margin-top:8px"><li>นัดพบจิตแพทย์หรือนักจิตวิทยาคลินิก</li><li>โทรสายด่วนสุขภาพจิตเพื่อรับคำปรึกษาเบื้องต้น</li><li>พูดคุยกับคนที่ไว้ใจ อย่าอยู่คนเดียว</li></ul>`;
  }

  container.innerHTML = `
    <div class="result-card">
      <div class="result-icon">${icon}</div>
      <h3>ผลการประเมินความเครียด</h3>
      <div class="result-score">คะแนนรวม: ${total} / 15</div>
      <div class="result-level ${levelClass}">${level}</div>
      <div class="result-advice">${advice}</div>
      <div class="test-warning" style="text-align:left;margin-bottom:24px">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
        <div style="font-size:.85rem">แบบประเมินนี้เป็นเพียงเครื่องมือคัดกรองเบื้องต้น ไม่ใช่การวินิจฉัยทางการแพทย์ หากต้องการความช่วยเหลือ กรุณาปรึกษาผู้เชี่ยวชาญ</div>
      </div>
      <div class="result-actions">
        ${total>=8?`<button class="btn btn-coral" onclick="navigate('counselor')">🔍 หาที่ปรึกษาตอนนี้</button>`:''}
        <button class="btn btn-primary" onclick="navigate('emergency')">📞 เบอร์โทรฉุกเฉิน</button>
        <button class="btn btn-outline" onclick="resetTest()">🔄 ทำแบบประเมินอีกครั้ง</button>
      </div>
    </div>`;
}


// ────────── ARTICLES ──────────
let currentCategory = 'all';

function renderArticles(cat){
  if(cat) currentCategory = cat;
  const grid = document.getElementById('articlesGrid');
  const full = document.getElementById('articleFull');
  grid.style.display = 'grid';
  full.style.display = 'none';

  const filtered = currentCategory==='all' ? articles : articles.filter(a=>a.category===currentCategory);

  grid.innerHTML = filtered.map((a,i)=>`
    <div class="article-card" onclick="showArticle(${a.id})" style="animation:scaleIn .4s var(--ease) ${i*.08}s both">
      <div class="article-thumb" style="background:${a.bg}">${a.emoji}</div>
      <div class="article-body">
        <span class="category-badge">${getCategoryLabel(a.category)}</span>
        <h3>${a.title}</h3>
        <p>${a.summary}</p>
        <span class="read-more">อ่านต่อ →</span>
      </div>
    </div>
  `).join('');
}

function getCategoryLabel(cat){
  const map = {stress:'ความเครียด',burnout:'Burnout','self-care':'Self-Care',workplace:'ที่ทำงาน'};
  return map[cat]||cat;
}

function filterArticles(btn, cat){
  document.querySelectorAll('.category-tabs button').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  renderArticles(cat);
}

function showArticle(id){
  const article = articles.find(a=>a.id===id);
  if(!article) return;
  const grid = document.getElementById('articlesGrid');
  const full = document.getElementById('articleFull');
  const tabs = document.querySelector('.category-tabs');
  grid.style.display = 'none';
  if(tabs) tabs.style.display='none';
  full.style.display = 'block';
  full.innerHTML = `
    <a class="back-link" onclick="backToArticles()">← กลับไปหน้าบทความ</a>
    <span class="category-badge" style="margin-bottom:16px;display:inline-block">${getCategoryLabel(article.category)}</span>
    <h1>${article.title}</h1>
    <p class="meta">📅 เผยแพร่โดย Happy Work</p>
    <div class="content">${article.content}</div>
    <div style="margin-top:36px;padding:24px;background:var(--primary-50);border-radius:var(--r-md);text-align:center">
      <p style="font-weight:600;margin-bottom:12px">ต้องการปรึกษาผู้เชี่ยวชาญ?</p>
      <button class="btn btn-primary btn-sm" onclick="navigate('counselor')">🔍 ค้นหาที่ปรึกษา</button>
    </div>`;
  window.scrollTo({top:0,behavior:'smooth'});
}

function backToArticles(){
  const tabs = document.querySelector('.category-tabs');
  if(tabs) tabs.style.display='';
  renderArticles();
}


// ────────── LOGIN ──────────
let authMode = 'login'; // login | register | otp

function renderLogin(){
  const container = document.getElementById('authContainer');

  if(authMode==='otp'){
    container.innerHTML = `
      <div class="auth-card">
        <h2>✉️ ยืนยันอีเมล</h2>
        <p class="subtitle">กรุณากรอกรหัส OTP ที่ส่งไปยังอีเมลของคุณ</p>
        <div class="otp-group">
          <input type="text" maxlength="1" oninput="otpNext(this,1)" id="otp0"/>
          <input type="text" maxlength="1" oninput="otpNext(this,2)" id="otp1"/>
          <input type="text" maxlength="1" oninput="otpNext(this,3)" id="otp2"/>
          <input type="text" maxlength="1" oninput="otpNext(this,4)" id="otp3"/>
          <input type="text" maxlength="1" oninput="otpNext(this,5)" id="otp4"/>
          <input type="text" maxlength="1" oninput="verifyOTP()" id="otp5"/>
        </div>
        <p style="text-align:center;font-size:.85rem;color:var(--text-muted);margin-bottom:20px">ไม่ได้รับรหัส? <a style="color:var(--primary-500);cursor:pointer" onclick="showToast('ส่งรหัส OTP ใหม่แล้ว!')">ส่งอีกครั้ง</a></p>
        <button class="btn btn-primary" onclick="verifyOTP()">ยืนยัน</button>
        <p class="auth-toggle"><a onclick="authMode='login';renderLogin()">← กลับหน้าเข้าสู่ระบบ</a></p>
      </div>`;
    setTimeout(()=>document.getElementById('otp0')?.focus(),100);
    return;
  }

  const isLogin = authMode==='login';
  container.innerHTML = `
    <div class="auth-card">
      <h2>${isLogin?'👋 เข้าสู่ระบบ':'✨ สมัครสมาชิก'}</h2>
      <p class="subtitle">${isLogin?'ยินดีต้อนรับกลับ! กรุณากรอกข้อมูลเพื่อเข้าสู่ระบบ':'สร้างบัญชีใหม่เพื่อใช้บริการ Happy Work'}</p>
      ${!isLogin?`
      <div class="form-group">
        <label for="regName">ชื่อ-นามสกุล</label>
        <input type="text" id="regName" placeholder="กรอกชื่อ-นามสกุล" />
      </div>`:''}
      <div class="form-group">
        <label for="authEmail">อีเมล</label>
        <input type="email" id="authEmail" placeholder="example@email.com" />
      </div>
      <div class="form-group">
        <label for="authPass">รหัสผ่าน</label>
        <input type="password" id="authPass" placeholder="อย่างน้อย 8 ตัวอักษร" />
        ${!isLogin?'<p class="input-note">ใช้ตัวอักษร ตัวเลข และสัญลักษณ์ผสมกัน</p>':''}
      </div>
      <button class="btn btn-primary" onclick="handleAuth()">${isLogin?'เข้าสู่ระบบ':'สมัครสมาชิก'}</button>
      <p class="auth-toggle">${isLogin?'ยังไม่มีบัญชี? <a onclick="authMode=\'register\';renderLogin()">สมัครสมาชิก</a>':'มีบัญชีแล้ว? <a onclick="authMode=\'login\';renderLogin()">เข้าสู่ระบบ</a>'}</p>
    </div>`;
}

function handleAuth(){
  const email = document.getElementById('authEmail')?.value;
  const pass = document.getElementById('authPass')?.value;
  if(!email || !pass){
    showToast('กรุณากรอกข้อมูลให้ครบถ้วน');
    return;
  }
  if(authMode==='register'){
    const name = document.getElementById('regName')?.value;
    if(!name){ showToast('กรุณากรอกชื่อ-นามสกุล'); return; }
  }
  authMode='otp';
  renderLogin();
  showToast('ส่งรหัส OTP ไปยังอีเมลของคุณแล้ว!');
}

function otpNext(el, nextIdx){
  if(el.value && nextIdx<6){
    document.getElementById('otp'+nextIdx)?.focus();
  }
}

function verifyOTP(){
  let otp = '';
  for(let i=0;i<6;i++){
    otp += document.getElementById('otp'+i)?.value||'';
  }
  if(otp.length===6){
    showToast('✅ ยืนยันสำเร็จ! ยินดีต้อนรับสู่ Happy Work');
    setTimeout(()=>{authMode='login';navigate('home');},1500);
  }
}


// ────────── EMERGENCY ──────────
function renderEmergency(){
  const container = document.getElementById('emergencyContainer');
  container.innerHTML = `
    <div class="emergency-header">
      <h2>📞 เบอร์โทรปรึกษา / ฉุกเฉิน</h2>
      <p>รายการสายด่วนสุขภาพจิตและสถานพยาบาลที่พร้อมช่วยเหลือคุณ</p>
      <div class="accent-line" style="margin:16px auto"></div>
    </div>

    <div class="emergency-banner">
      <h3>🆘 สายด่วนสุขภาพจิต</h3>
      <div class="hotline"><a href="tel:1323" style="color:#fff">1323</a></div>
      <p>กรมสุขภาพจิต — บริการ 24 ชั่วโมง ทุกวัน ไม่มีวันหยุด</p>
    </div>

    ${emergencyContacts.map(c=>`
      <div class="emergency-card">
        <div class="emergency-icon ${c.icon}">
          ${c.type==='hotline'?'📞':'🏥'}
        </div>
        <div class="emergency-content">
          <h3>${c.name}</h3>
          <p class="location">📍 ${c.location}</p>
          <p class="hours">🕐 ${c.hours}</p>
          <div class="emergency-actions">
            <a href="tel:${c.number.replace(/-/g,'')}" class="call-btn">📞 โทร ${c.number}</a>
            ${c.number2?`<a href="tel:${c.number2.replace(/-/g,'')}" class="call-btn">📞 โทร ${c.number2}</a>`:''}
            ${c.line?`<a href="https://line.me/R/ti/p/${c.line}" target="_blank" rel="noopener" class="line-btn">💬 LINE ${c.line}</a>`:''}
          </div>
        </div>
      </div>
    `).join('')}

    <div style="margin-top:32px;padding:24px;background:var(--primary-50);border-radius:var(--r-md);text-align:center">
      <p style="font-weight:600;margin-bottom:8px">ต้องการนัดปรึกษาสุขภาพจิต?</p>
      <p style="font-size:.9rem;color:var(--text-light);margin-bottom:16px">ค้นหาผู้เชี่ยวชาญที่เหมาะกับคุณ</p>
      <button class="btn btn-primary btn-sm" onclick="navigate('counselor')">🔍 ค้นหาที่ปรึกษา</button>
    </div>`;
}


// ────────── QUICK CONSULT MODAL ──────────
function renderQuickConsult(){
  const list = document.getElementById('quickConsultList');
  // Show first 4 counselors
  list.innerHTML = counselors.slice(0,4).map(c=>`
    <div style="display:flex;gap:14px;align-items:flex-start;padding:16px;border:1px solid var(--border);border-radius:var(--r-md);margin-bottom:12px;transition:all var(--dur) var(--ease);"
         onmouseenter="this.style.boxShadow='var(--shadow-sm)';this.style.borderColor='var(--primary-200)'"
         onmouseleave="this.style.boxShadow='none';this.style.borderColor='var(--border)'">
      <div style="width:48px;height:48px;border-radius:50%;background:${c.gradient};display:flex;align-items:center;justify-content:center;color:#fff;font-weight:700;flex-shrink:0">${c.avatar}</div>
      <div style="flex:1">
        <h4 style="font-size:.95rem;font-weight:600;margin-bottom:2px">${c.name}</h4>
        <p style="font-size:.8rem;color:var(--text-muted);margin-bottom:8px">${c.title}</p>
        <div style="display:flex;gap:6px;flex-wrap:wrap">
          <a href="tel:${c.phone.replace(/-/g,'')}" class="btn btn-green btn-sm" style="padding:6px 14px;font-size:.78rem">📞 โทร</a>
          <a href="https://line.me/R/ti/p/${c.line}" target="_blank" rel="noopener" class="btn btn-sm" style="padding:6px 14px;font-size:.78rem;background:#06C755;color:#fff">💬 LINE</a>
          <a href="mailto:${c.email}" class="btn btn-outline btn-sm" style="padding:6px 14px;font-size:.78rem">📧 อีเมล</a>
        </div>
      </div>
    </div>
  `).join('');
}

function openQuickConsult(){
  document.getElementById('quickConsultModal').classList.add('show');
  document.body.style.overflow='hidden';
}

function closeModal(){
  document.getElementById('quickConsultModal').classList.remove('show');
  document.body.style.overflow='';
}

// Close modal on overlay click
document.addEventListener('click',(e)=>{
  if(e.target.classList.contains('modal-overlay')){
    closeModal();
  }
});

// Close modal on Escape
document.addEventListener('keydown',(e)=>{
  if(e.key==='Escape') closeModal();
});


// ────────── TOAST ──────────
function showToast(msg){
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.style.display = 'block';
  toast.style.animation = 'none';
  void toast.offsetHeight;
  toast.style.animation = 'fadeUp .4s var(--ease) both';
  setTimeout(()=>{toast.style.display='none'},3000);
}


// ────────── INTERSECTION OBSERVER (animations) ──────────
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.style.animationPlayState='running';
      observer.unobserve(entry.target);
    }
  });
},{threshold:0.1});

document.addEventListener('DOMContentLoaded',()=>{
  document.querySelectorAll('.feature-card').forEach(card=>{
    card.style.animation='fadeUp .6s var(--ease) both';
    card.style.animationPlayState='paused';
    observer.observe(card);
  });
});
