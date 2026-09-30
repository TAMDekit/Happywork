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

// SPST-20 (แบบวัดความเครียดสวนปรุง 20 ข้อ — กรมสุขภาพจิต / มาตรฐาน Ooca)
const stressQuestions = [
  {
    id: 1,
    text: 'นอนไม่หลับเพราะคิดมากหรือกังวลใจ',
    textEn: 'Do you have difficulty falling asleep because of your frustrated mind or worry over something?',
    category: 'physical',
    image: 'images/stress_test/stress_test_question_1.png'
  },
  {
    id: 2,
    text: 'รู้สึกหงุดหงิด รำคาญใจ',
    textEn: 'Do you often feel irritated or annoyed by something?',
    category: 'emotional',
    image: 'images/stress_test/stress_test_question_2.png'
  },
  {
    id: 3,
    text: 'ทำอะไรไม่ได้เลย เพราะประสาทตึงเครียด',
    textEn: "Does it ever occur to you that you are so stressed out that you can't focus or do anything?",
    category: 'cognitive',
    image: 'images/stress_test/stress_test_question_3.png'
  },
  {
    id: 4,
    text: 'มีความวุ่นวายใจ',
    textEn: 'How often do you feel upset?',
    category: 'emotional',
    image: 'images/stress_test/stress_test_question_4.png'
  },
  {
    id: 5,
    text: 'ไม่อยากพบปะผู้คน',
    textEn: 'Have you ever feel like wanting to isolate yourself from other people?',
    category: 'cognitive',
    image: 'images/stress_test/stress_test_question_5.png'
  },
  {
    id: 6,
    text: 'ปวดหัวข้างเดียวหรือปวดบริเวณขมับทั้งสองข้าง',
    textEn: 'How often do you have an headache on one side or pain at both of your temples?',
    category: 'physical',
    image: 'images/stress_test/stress_test_question_6.png'
  },
  {
    id: 7,
    text: 'รู้สึกไม่มีความสุขและเศร้าหมอง',
    textEn: 'How often do you feel unhappy and sombre?',
    category: 'emotional',
    image: 'images/stress_test/stress_test_question_7.png'
  },
  {
    id: 8,
    text: 'รู้สึกหมดหวังในชีวิต',
    textEn: 'How often do you feel hopeless?',
    category: 'emotional',
    image: 'images/stress_test/stress_test_question_8.png'
  },
  {
    id: 9,
    text: 'รู้สึกว่าชีวิตของตัวเองไม่มีคุณค่า',
    textEn: 'How often do you feel worthless?',
    category: 'emotional',
    image: 'images/stress_test/stress_test_question_9.png'
  },
  {
    id: 10,
    text: 'กระวนกระวายตลอดเวลา',
    textEn: 'How often do you feel restless or anxious?',
    category: 'emotional',
    image: 'images/stress_test/stress_test_question_10.png'
  },
  {
    id: 11,
    text: 'รู้สึกว่าตนเองไม่มีสมาธิ',
    textEn: 'Do you feel that you have poor concentration?',
    category: 'cognitive',
    image: 'images/stress_test/stress_test_question_11.png'
  },
  {
    id: 12,
    text: 'รู้สึกเพลียจนไม่มีแรงจะทำอะไร',
    textEn: "How often do you feel so exhausted that you don't want do anything?",
    category: 'physical',
    image: 'images/stress_test/stress_test_question_12.png'
  },
  {
    id: 13,
    text: 'รู้สึกเหนื่อยหน่ายไม่อยากทำอะไร',
    textEn: "How often do you feel fatigued and you don't want to do anything?",
    category: 'cognitive',
    image: 'images/stress_test/stress_test_question_13.png'
  },
  {
    id: 14,
    text: 'มีอาการหัวใจเต้นแรง',
    textEn: 'Have you ever experience when your heartbeat is racing so fast?',
    category: 'physical',
    image: 'images/stress_test/stress_test_question_14.png'
  },
  {
    id: 15,
    text: 'เสียงสั่น ปากสั่น หรือมือสั่นเวลาไม่พอใจ',
    textEn: 'Do you have trembling voice, lips or hands when you are upset?',
    category: 'physical',
    image: 'images/stress_test/stress_test_question_15.png'
  },
  {
    id: 16,
    text: 'กลัวผิดพลาดในการทำสิ่งต่างๆ',
    textEn: 'How often do you feel afraid of making mistakes?',
    category: 'cognitive',
    image: 'images/stress_test/stress_test_question_16.png'
  },
  {
    id: 17,
    text: 'ปวดหรือเกร็งกล้ามเนื้อบริเวณท้ายทอย หลัง หรือไหล่',
    textEn: 'Do you have aches or strains around your occiput or shoulders?',
    category: 'physical',
    image: 'images/stress_test/stress_test_question_17.png'
  },
  {
    id: 18,
    text: 'ตื่นเต้นง่ายกับเหตุการณ์ที่ไม่คุ้นเคย',
    textEn: 'Are you easily excited with unfamiliar events?',
    category: 'emotional',
    image: 'images/stress_test/stress_test_question_18.png'
  },
  {
    id: 19,
    text: 'มึนงงหรือเวียนศีรษะ',
    textEn: 'Do you have dizziness or confusion?',
    category: 'physical',
    image: 'images/stress_test/stress_test_question_19.png'
  },
  {
    id: 20,
    text: 'ความสุขทางเพศลดลง',
    textEn: 'Do have less sex-drive?',
    category: 'physical',
    image: 'images/stress_test/stress_test_question_20.png'
  }
];

const stressOptions = [
  { label: 'ไม่เคยเลย', labelEn: 'None', value: 0, badge: '0 คะแนน' },
  { label: 'เป็นครั้งเป็นคราว', labelEn: 'Sometimes', value: 1, badge: '1 คะแนน' },
  { label: 'เป็นบ่อย', labelEn: 'Often', value: 2, badge: '2 คะแนน' },
  { label: 'เป็นประจำ', labelEn: 'Regularly', value: 3, badge: '3 คะแนน' }
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


// ────────── STRESS TEST (SPST-20 OOCA STANDARD) ──────────
function renderStressTest(){
  const container = document.getElementById('testContainer');
  if(!container) return;

  if(testState.completed){
    showResult();
    return;
  }
  if(!testState.started){
    renderStartScreen();
    return;
  }
  showQuestion();
}

function renderStartScreen(){
  const container = document.getElementById('testContainer');
  container.innerHTML = `
    <div class="test-start-card">
      <div class="test-start-badge">
        <span>📋 แบบวัดความเครียดสวนปรุง (SPST-20)</span>
      </div>
      <img src="images/stress_test/stress_test_question_start.png" alt="เริ่มทำแบบทดสอบ" class="test-start-illustration" onerror="this.style.display='none'">
      <h2>คุณกำลังเครียด<br>อยู่หรือเปล่า? 😣</h2>
      <p class="subtitle">
        สำรวจระดับความเครียดของตัวเองด้วยแบบประเมินมาตรฐาน 20 ข้อจากกรมสุขภาพจิต (อ้างอิงมาตรฐานเดียวกับ Ooca) ใช้เวลาประมาณ 4-5 นาที
      </p>

      <div class="test-meta-grid">
        <div class="test-meta-item">
          <div class="meta-icon">⏱️</div>
          <div class="meta-title">20 ข้อคำถาม</div>
          <div class="meta-desc">ใช้เวลา 4 - 5 นาที</div>
        </div>
        <div class="test-meta-item">
          <div class="meta-icon">🔒</div>
          <div class="meta-title">เป็นความลับ 100%</div>
          <div class="meta-desc">ไม่มีการเก็บข้อมูลระบุตัวตน</div>
        </div>
        <div class="test-meta-item">
          <div class="meta-icon">📊</div>
          <div class="meta-title">ผลประเมินแม่นยำ</div>
          <div class="meta-desc">จำแนก 5 ระดับมาตรฐาน</div>
        </div>
      </div>

      <div class="test-timeframe-note">
        <span>💡 <strong>คำแนะนำ:</strong> โปรดเลือกคำตอบที่ตรงกับความรู้สึกและอาการที่เกิดขึ้นกับคุณ <strong>ภายใน 2 เดือนที่ผ่านมา</strong></span>
      </div>

      <div class="test-warning" style="text-align:left;margin-bottom:28px">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
        <div style="font-size:.85rem">
          แบบทดสอบนี้เป็นเครื่องมือคัดกรองเบื้องต้นเพื่อความตระหนักรู้ <strong>ไม่ใช่การวินิจฉัยทางการแพทย์</strong> หากคุณรู้สึกไม่ปลอดภัยหรือมีความทุกข์ใจอย่างหนัก สามารถติดต่อสายด่วนสุขภาพจิต 1323 ได้ตลอด 24 ชั่วโมง
        </div>
      </div>

      <button class="btn btn-primary" onclick="startTest()" style="width:100%;max-width:380px;margin:0 auto;justify-content:center;padding:16px 28px;font-size:1.05rem">
        เริ่มทำแบบทดสอบ →
      </button>
    </div>`;
}

function startTest(){
  testState = {
    currentQ: 0,
    answers: new Array(stressQuestions.length).fill(-1),
    started: true,
    completed: false
  };
  showQuestion();
}

function showQuestion(){
  const container = document.getElementById('testContainer');
  const q = testState.currentQ;
  const total = stressQuestions.length;
  const current = stressQuestions[q];
  const answered = testState.answers[q];
  const answeredCount = testState.answers.filter(a => a !== -1).length;
  const progressPct = Math.round(((q + 1) / total) * 100);

  container.innerHTML = `
    <div class="question-top-bar">
      <div class="q-counter">
        <span>คำถามข้อที่ <strong>${q + 1}</strong> จาก ${total}</span>
      </div>
      <div style="display:flex;align-items:center;gap:12px">
        <span class="q-percent">${progressPct}%</span>
        <button class="q-quit-btn" onclick="confirmQuitTest()" title="ออกจากการทดสอบ">✕ ออก</button>
      </div>
    </div>

    <div class="test-progress-bar">
      <div class="test-progress-fill" style="width:${progressPct}%"></div>
    </div>

    <!-- 20 Question Dots Quick Selector -->
    <div class="test-dots-nav">
      ${stressQuestions.map((_, idx) => {
        const isAnswered = testState.answers[idx] !== -1;
        const isActive = idx === q;
        const cls = isActive ? 'test-dot active' : (isAnswered ? 'test-dot answered' : 'test-dot');
        return `<button class="${cls}" onclick="goToQuestion(${idx})" title="ข้อ ${idx + 1}">${idx + 1}</button>`;
      }).join('')}
    </div>

    <div class="test-question-card">
      <div class="question-instruction-tag">
        ⏱️ ความรู้สึกของคุณภายใน 2 เดือนนี้
      </div>

      <div class="question-image-wrap">
        <img src="${current.image}" alt="คำถามข้อที่ ${q + 1}" onerror="this.parentElement.style.display='none'">
      </div>

      <div class="q-title">${current.text}</div>
      <div class="q-subtitle">${current.textEn}</div>

      <div class="options-grid">
        ${stressOptions.map(opt => {
          const isSelected = answered === opt.value;
          return `
            <button class="option-card-btn ${isSelected ? 'selected' : ''}" onclick="selectOption(${opt.value})">
              <div class="option-left">
                <span class="option-indicator"></span>
                <div class="option-text-group">
                  <span class="option-main-text">${opt.label}</span>
                  <span class="option-sub-text">${opt.labelEn}</span>
                </div>
              </div>
              <span class="option-score-badge">${opt.badge}</span>
            </button>
          `;
        }).join('')}
      </div>

      <div class="test-nav-bar">
        <button class="btn btn-outline btn-sm" onclick="prevQuestion()" ${q === 0 ? 'disabled style="opacity:.4;pointer-events:none"' : ''}>
          ← ข้อก่อนหน้า
        </button>
        <button class="btn btn-primary btn-sm" onclick="nextQuestion()" ${answered === -1 ? 'disabled style="opacity:.4;pointer-events:none"' : ''}>
          ${q === total - 1 ? 'ประเมินผลลัพธ์ 🎉' : 'ข้อถัดไป →'}
        </button>
      </div>
    </div>
  `;
}

function selectOption(value){
  const q = testState.currentQ;
  testState.answers[q] = value;

  // Immediate visual update on options
  const optionBtns = document.querySelectorAll('.option-card-btn');
  optionBtns.forEach((btn, idx) => {
    btn.classList.toggle('selected', idx === value);
  });

  // Highlight dot
  const dots = document.querySelectorAll('.test-dot');
  if(dots[q]) dots[q].classList.add('answered');

  // Auto advance smoothly after brief click acknowledgment (250ms)
  setTimeout(() => {
    if(testState.currentQ < stressQuestions.length - 1){
      testState.currentQ++;
      showQuestion();
      window.scrollTo({ top: 120, behavior: 'smooth' });
    } else {
      // Check if all answered
      const allAnswered = testState.answers.every(a => a !== -1);
      if(allAnswered){
        testState.completed = true;
        showResult();
        window.scrollTo({ top: 120, behavior: 'smooth' });
      } else {
        showQuestion();
      }
    }
  }, 220);
}

function goToQuestion(idx){
  if(idx >= 0 && idx < stressQuestions.length){
    testState.currentQ = idx;
    showQuestion();
  }
}

function nextQuestion(){
  if(testState.answers[testState.currentQ] === -1) return;
  if(testState.currentQ < stressQuestions.length - 1){
    testState.currentQ++;
    showQuestion();
  } else {
    testState.completed = true;
    showResult();
  }
}

function prevQuestion(){
  if(testState.currentQ > 0){
    testState.currentQ--;
    showQuestion();
  }
}

function confirmQuitTest(){
  const answeredCount = testState.answers.filter(a => a !== -1).length;
  if(answeredCount > 0){
    if(confirm('คุณต้องการออกจากการทำแบบทดสอบหรือไม่? (ข้อมูลที่ตอบไว้จะถูกรีเซ็ต)')){
      resetTest();
    }
  } else {
    resetTest();
  }
}

function resetTest(){
  testState = {
    currentQ: 0,
    answers: new Array(stressQuestions.length).fill(-1),
    started: false,
    completed: false
  };
  renderStressTest();
}

function showResult(){
  const container = document.getElementById('testContainer');
  const total = testState.answers.reduce((acc, v) => acc + (v > -1 ? v : 0), 0);

  // Exact Ooca / DMH SPST-20 criteria (0-60 scale)
  let level, levelClass, badge, imgResult, title, body, isUrgent = false;

  if(total <= 5){
    level = 0;
    levelClass = 'level-0';
    badge = '🌿 ต่ำกว่าเกณฑ์ (0-5 คะแนน)';
    imgResult = 'images/stress_test/stress_test_below_result.png';
    title = 'ต่ำกว่าเกณฑ์';
    body = `
      <p>ความเครียดในระดับต่ำมากเช่นนี้ อาจมีความหมายอย่างใดอย่างหนึ่ง เช่น ตอบคำถามไม่ตรงความเป็นจริง, เข้าใจคำถามคลาดเคลื่อน, หรือเป็นช่วงเวลาที่ขาดแรงจูงใจ มีความเฉื่อยชา หรือชีวิตประจำวันซ้ำซากจำเจ</p>
      <p>💡 <strong>คำแนะนำ:</strong> แนะนำให้ทำแบบทดสอบอีกครั้งเพื่อให้ได้ผลที่แม่นยำมากยิ่งขึ้น หรือลองหาแรงบันดาลใจ กิจกรรมใหม่ๆ และตั้งเป้าหมายเล็กๆ ในแต่ละวันเพื่อเพิ่มพลังใจในการทำงาน</p>
    `;
  } else if(total <= 17){
    level = 1;
    levelClass = 'level-1';
    badge = '😊 ปกติ (6-17 คะแนน)';
    imgResult = 'images/stress_test/stress_test_normal_result.png';
    title = 'ปกติ';
    body = `
      <p><strong>ยินดีด้วยครับ!</strong> คุณสามารถจัดการกับความเครียดที่เกิดขึ้นในชีวิตประจำวันและปรับตัวกับสถานการณ์ต่างๆ ได้อย่างเหมาะสม มีความพึงพอใจเกี่ยวกับตนเองและสภาพแวดล้อมรอบตัว</p>
      <p>💡 <strong>คำแนะนำ:</strong> ความเครียดในระดับนี้ถือว่า <strong>มีประโยชน์ในการดำเนินชีวิตประจำวัน</strong> เป็นพลังขับเคลื่อนและแรงจูงใจที่นำไปสู่ความสำเร็จ ควรรักษาสมดุล Work-Life Balance และดูแลสุขภาพอย่างต่อเนื่อง</p>
    `;
  } else if(total <= 25){
    level = 2;
    levelClass = 'level-2';
    badge = '⚠️ สูงกว่าปกติเล็กน้อย (18-25 คะแนน)';
    imgResult = 'images/stress_test/stress_test_little_result.png';
    title = 'สูงกว่าปกติเล็กน้อย';
    body = `
      <p>ถือว่าเป็นระดับความเครียดที่สามารถพบได้บ่อยในชีวิตประจำวันของคนทำงาน คุณอาจเริ่มมีความเหนื่อยล้าสะสมโดยไม่รู้ตัว</p>
      <p>💡 <strong>คำแนะนำ:</strong> แนะนำให้พูดคุยกับผู้ที่ไว้วางใจเพื่อระบายความรู้สึก หรือจัดสรรเวลาผ่อนคลายความเครียด เช่น ดูหนัง ฟังเพลง ออกกำลังกายเบาๆ หรือฝึกเทคนิคการหายใจ หากรู้สึกว่าอาการเริ่มรบกวนงาน การปรึกษานักจิตวิทยาสามารถช่วยป้องกันภาวะหมดไฟได้</p>
    `;
  } else if(total <= 29){
    level = 3;
    levelClass = 'level-3';
    badge = '⚡ สูงกว่าปกติปานกลาง (26-29 คะแนน)';
    imgResult = 'images/stress_test/stress_test_moderately_result.png';
    title = 'สูงกว่าปกติปานกลาง';
    isUrgent = true;
    body = `
      <p>หากไม่สามารถจัดการคลี่คลายปัญหาด้วยตนเองได้ <strong>ควรปรึกษาปัญหากับจิตแพทย์ นักจิตวิทยา หรือผู้ที่ไว้วางใจ</strong></p>
      <p>💡 <strong>คำแนะนำ:</strong> ความเครียดระดับนี้เป็นสัญญาณเตือนขั้นต้นว่าท่านกำลังเผชิญภาวะวิกฤต หรือแรงกดดันที่เริ่มจัดการแก้ไขได้ยาก จำเป็นต้องหาวิธีลดภาระงาน ปรับสมดุลอารมณ์ และพิจารณารับคำปรึกษาจากมืออาชีพ</p>
    `;
  } else {
    level = 4;
    levelClass = 'level-4';
    badge = '🚨 สูงกว่าปกติมาก (30-60 คะแนน)';
    imgResult = 'images/stress_test/stress_test_severely_result.png';
    title = 'สูงกว่าปกติมาก';
    isUrgent = true;
    body = `
      <p><strong>พิจารณารับการปรึกษาปัญหาสุขภาพจิตกับจิตแพทย์หรือนักจิตวิทยาทันที</strong> ซึ่งจะช่วยให้ท่านมองเห็นปัญหาและแนวทางแก้ไขที่ชัดเจนและเหมาะสม</p>
      <p>💡 <strong>คำแนะนำ:</strong> ความเครียดในระดับนี้ถือว่ามีความรุนแรงมาก และอาจส่งผลกระทบต่อทั้งระบบร่างกายและการทำงาน หากปล่อยไว้โดยไม่ได้รับการดูแลอาจนำไปสู่ภาวะซึมเศร้าหรือหมดไฟรุนแรง อย่าแบกรับไว้เพียงลำพัง</p>
    `;
  }

  // Calculate Subscores
  // Physical: items 1, 6, 12, 14, 15, 17, 19, 20 (8 items, max 24)
  const physicalIndices = [0, 5, 11, 13, 14, 16, 18, 19];
  const physicalScore = physicalIndices.reduce((sum, i) => sum + (testState.answers[i] > -1 ? testState.answers[i] : 0), 0);

  // Emotional: items 2, 4, 7, 8, 9, 10, 18 (7 items, max 21)
  const emotionalIndices = [1, 3, 6, 7, 8, 9, 17];
  const emotionalScore = emotionalIndices.reduce((sum, i) => sum + (testState.answers[i] > -1 ? testState.answers[i] : 0), 0);

  // Cognitive & Work: items 3, 5, 11, 13, 16 (5 items, max 15)
  const cognitiveIndices = [2, 4, 10, 12, 15];
  const cognitiveScore = cognitiveIndices.reduce((sum, i) => sum + (testState.answers[i] > -1 ? testState.answers[i] : 0), 0);

  container.innerHTML = `
    <div class="result-container">
      <!-- Hero Result Card -->
      <div class="result-hero-card ${levelClass}">
        <img src="${imgResult}" alt="${title}" class="result-hero-illustration" onerror="this.style.display='none'">
        <div class="result-pre-title">ความเครียดของคุณอยู่ในระดับ...</div>
        <div class="result-title">${title}</div>
        
        <div class="result-score-pill">
          <span>คะแนนรวม: <strong>${total}</strong> / 60</span>
        </div>

        <!-- Visual Score Gauge -->
        <div class="score-gauge-wrap">
          <div class="score-gauge-label">
            <span>เกณฑ์ประเมิน SPST-20</span>
            <span>ระดับปัจจุบัน: ${title}</span>
          </div>
          <div class="score-gauge-track">
            <div class="gauge-seg seg-0" title="ต่ำกว่าเกณฑ์: 0-5" style="opacity:${level===0?1:0.4}"></div>
            <div class="gauge-seg seg-1" title="ปกติ: 6-17" style="opacity:${level===1?1:0.4}"></div>
            <div class="gauge-seg seg-2" title="เล็กน้อย: 18-25" style="opacity:${level===2?1:0.4}"></div>
            <div class="gauge-seg seg-3" title="ปานกลาง: 26-29" style="opacity:${level===3?1:0.4}"></div>
            <div class="gauge-seg seg-4" title="สูงมาก: 30-60" style="opacity:${level===4?1:0.4}"></div>
          </div>
          <div class="score-gauge-ticks">
            <span>0</span>
            <span>6</span>
            <span>18</span>
            <span>26</span>
            <span>30</span>
            <span>60</span>
          </div>
        </div>
      </div>

      <!-- Urgent Help Banner if moderate or high -->
      ${isUrgent ? `
        <div class="result-urgent-alert">
          <div>
            <h4>🚨 ต้องการความช่วยเหลือทันที?</h4>
            <p>คุณสามารถพูดคุยกับผู้เชี่ยวชาญจากสายด่วนสุขภาพจิตได้ฟรี ตลอด 24 ชั่วโมง</p>
          </div>
          <a href="tel:1323" class="btn-urgent">
            📞 โทร 1323 (สายด่วนสุขภาพจิต)
          </a>
        </div>
      ` : ''}

      <!-- Sub-score Breakdown -->
      <div class="subscores-grid">
        <div class="subscore-card">
          <div class="sub-icon">🩺</div>
          <div class="sub-title">อาการทางกาย</div>
          <div class="sub-val">${physicalScore} / 24</div>
          <div class="sub-desc">การนอน, อาการปวดหัว, ความเมื่อยล้า, หัวใจเต้นแรง</div>
        </div>
        <div class="subscore-card">
          <div class="sub-icon">💭</div>
          <div class="sub-title">อารมณ์และจิตใจ</div>
          <div class="sub-val">${emotionalScore} / 21</div>
          <div class="sub-desc">ความหงุดหงิด, ว้าวุ่น, เศร้าหมอง, ความวิตกกังวล</div>
        </div>
        <div class="subscore-card">
          <div class="sub-icon">💼</div>
          <div class="sub-title">สมาธิและการทำงาน</div>
          <div class="sub-val">${cognitiveScore} / 15</div>
          <div class="sub-desc">สมาธิในการทำงาน, ความเหนื่อยหน่าย, การเข้าสังคม</div>
        </div>
      </div>

      <!-- Detailed Advice Card -->
      <div class="result-detail-card">
        <h3>📋 รายละเอียดและคำแนะนำ</h3>
        ${body}
        
        <div class="accent-line" style="margin:20px 0"></div>
        <p style="font-size:.85rem;color:var(--text-muted);margin-bottom:0">
          * แบบประเมินนี้ใช้เพื่อการคัดกรองเบื้องต้นตามเกณฑ์ของกรมสุขภาพจิต ไม่สามารถใช้แทนการตรวจวินิจฉัยโดยแพทย์ผู้เชี่ยวชาญได้
        </p>
      </div>

      <!-- Action Buttons -->
      <div class="result-action-bar">
        <button class="btn btn-primary" onclick="navigate('counselor')">
          👩‍⚕️ ปรึกษาผู้เชี่ยวชาญ Happy Work
        </button>
        <button class="btn btn-outline" onclick="navigate('articles')">
          📖 ดูบทความจัดการความเครียด
        </button>
        <button class="btn btn-outline" onclick="shareStressResult(${total}, '${title}')">
          🔗 แชร์ผลการทดสอบ
        </button>
        <button class="btn btn-outline" onclick="resetTest()">
          🔄 ประเมินอีกครั้ง
        </button>
      </div>
    </div>
  `;
}

function shareStressResult(total, title){
  const text = `ฉันได้ทำแบบประเมินความเครียดมาตรฐาน (SPST-20) บน Happy Work ผลลัพธ์: ระดับ ${title} (${total}/60 คะแนน) ลองประเมินความเครียดของคุณได้ที่นี่`;
  const url = window.location.href;

  if(navigator.share){
    navigator.share({
      title: 'ผลการประเมินความเครียด — Happy Work',
      text: text,
      url: url
    }).catch(()=>{});
  } else {
    // Copy to clipboard
    navigator.clipboard.writeText(`${text}\n${url}`).then(() => {
      showToast('📋 คัดลอกผลการประเมินเรียบร้อยแล้ว!');
    }).catch(() => {
      showToast('ระดับความเครียดของคุณ: ' + title);
    });
  }
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
