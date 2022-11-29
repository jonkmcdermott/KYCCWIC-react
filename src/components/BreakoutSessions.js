import React, { useState } from 'react'
import {FaChevronDown, FaChevronUp, FaTimes} from 'react-icons/fa'
import './SpeakerCard.css'
import placeholder from './assets/placeholder.jpg'


const url_header = "./assets/BreakoutSessions/"

function DisplaySpeakerCard(speaker_id, speaker_title, speaker_bio, image_exists) {
  const [isCardVisible, setIsCardVisible] = useState(false);
  const changeIsCardVisible = () => setIsCardVisible(!isCardVisible)

  return (
    <div className="speaker-card" key={speaker_id} id={speaker_id}>

      <div className="speaker-image-container">
        {image_exists ?
          <img className="speaker-image" src={require(url_header + speaker_id + ".jpg")} alt={speaker_title}/>
        :
        <img className="speaker-image" src={placeholder} alt='Placeholder for missing speaker'/>
        }
        
      </div>

      <div className="speaker-content-container">
        <p className='speaker-title'>{speaker_title}</p>
        <div onClick={changeIsCardVisible} className="show-speaker-info">
          {isCardVisible ? 
            (<FaChevronUp className='speaker-icon' />) 
            : (<FaChevronDown className='speaker-icon'/>)
          }
        </div>

        <div className={isCardVisible ? "speaker-bio-container" : "speaker-bio-container speaker-content-hidden"}>
          <div className={isCardVisible ? "speaker-modal-container" : "speaker-modal-container speaker-content-hidden"}>
            <p className='speaker-bio-text'>{speaker_bio}</p>
            <div className='card-close-div'>
              <FaTimes onClick={changeIsCardVisible} className='speaker-icon close-speaker-card' />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}


function BreakoutSessions() {
  return (
    <div className='container' id='breakout'>
      <h1>Breakout Session Speakers</h1>

      <div className="speaker-cards-layout">


        {DisplaySpeakerCard(
          'leslie_benningfield',
          'Leslie Benningfield',
          'I work for the University of KY Medical Center (Kentucky Cancer Registry), my title is Regional Abstractor Coordinator. I have been with the Kentucky Cancer Registry for about 15 years, but worked in the cancer registry for close to 20 years.  I report cancer cases to our office in the Western part of the state. I travel to hospitals as well as work remotely. I went to WKU. I have an AS in Business & also an AS in Healthcare Information Management. I have also taught classes in the past in Medical Coding at Southcentral KY Community & Technical College. I have my CTR (Certified Tumor Registrar) as well as my RHIT (Registered Healthcare Information Tech) certifications. I really enjoy Cancer Registry & teaching others what this field is about.  On the side, I also teach spinning & other fitness classes here in town at BAC & love to run.  I enjoy spending time with my two boys ages, 12 & 22.',
          true
        )}        

        {DisplaySpeakerCard(
          'mark_ciampa',
          'Dr. Mark Ciampa',
          'Dr. Mark Ciampa is a Professor of Information Systems in the Gordon Ford College of Business at Western Kentucky University in Bowling Green, Kentucky. Prior to this he was an Associate Professor and served as the Director of Academic Computing at Volunteer State Community College in Gallatin, Tennessee for 20 years. Mark has worked in the IT industry as a computer consultant for businesses, government agencies, and educational institutions. He has published over 25 articles in peer-reviewed journals and books. He is also the author of 30 technology textbooks from Cengage, including Security+ Guide to Network Security Fundamentals 7e, CompTIA CySA+ Guide to Cybersecurity Analyst 2e, CWNA Guide to Wireless LANs 3e, Guide to Wireless Communications, Security Awareness: Applying Practical Security In Your World 5e, and Networking BASICS. Dr. Ciampa holds a PhD in technology management with a specialization in digital communication systems from Indiana State University and has certifications in security and healthcare.',
          true
        )}

        {DisplaySpeakerCard(
          'dana_cosby',
          'Dr. Dana Cosby',
          'Dr. Dana Cosby is the Associate Dean of Graduate Programs & Outreach, MBA Director, and Associate Professor of Management within Gordon Ford College of Business at Western Kentucky University.  She holds a Ph.D. in Human Resources Development from University of Louisville, Master of Arts in Organizational Communication from Western Kentucky University, and Bachelor of Science in Social and Behavioral Focus from Western Kentucky University.  Dr. Cosby studies and presents guest lectures on Generations, Social-Emotional Intelligence, and Workplace Incivility with a special interest in the impact of human resource practices on the phenomenon.  \n In addition to her Ph. D., Dr. Cosby holds the designations of SHRM-SCP, SPHR (Senior Professional in Human Resources designations through the national Society for Human Resource Management), GPHR (Global Professional in Human Resources) and CCP (Certified Compensation Professional - designation earned through the national World at Work organization).  Her experience includes leadership roles in both private and public sectors. She held an executive role with a billion-dollar multi-national organization with oversight for a number of corporate functions, including change management, risk management, compensation and benefits, training and organizational development, employee communications, and governmental affairs.  She has consulted and lectured on international management, most specifically, competency attainment, for programs serving organizations in Japan, Mexico, Canada, Russia, Austria, and Germany. Her consulting practice includes executive recruiting, coaching, human resources development, and organizational design. \n Dr. Cosby is a member of the international Society for Human Resource Management, Association for Talent Development and World at Work. She is a member of the local Southern Kentucky Society for Human Resource Management chapter, where she has served as a member of the board of directors.  She is also a graduate of Leadership Bowling Green 2001 and has served on a number of non-profit boards, including United Way of South-Central Kentucky, Barren River Child Advocacy Center, the International Center, the Warren County-Bowling Green International Festival, and Plum Tree Montessori School.',
          true
        )}

        {DisplaySpeakerCard(
          'vince_dinoto',
          'Vince DiNoto',
          'Vince DiNoto, is the Director of the National Center of Excellence for Geospatial Technology (GeoTech Center), co-PI of the National Center for Autonomous Technology (NCAT), Professor of Physics, Astronomy, and Geospatial Technology, and Dean of College and Systemic Initiatives at Jefferson Community and Technical College. He received his degrees from Indiana State University in Terre Haute and has additional graduate hours from Indiana University Southeast and Ball State University. He has designed numerous courses over his career, most recently a Python Mapping course and a Web Mapping course. He is a dynamic grant designer, serving as PI, co-PI, and director of numerous projects and National Centers in Advanced Technology. He has mentored numerous faculty members in the AACC MentorLinks program and MentorConnects.',
          true
        )}

        {DisplaySpeakerCard(
          'evan_harmon',
          'Evan Harmon',
          'Evan T. Harmon, MHI, RHIA, is the Remote Patient Monitoring (RPM) System Leader for Baptist Health Kentucky, responsible for RPM oversight, expansion, and strategy development. He previously served as Baptist\'s corporate IT manager providing support and direction over health information management IT applications, including the full suite of Epic HIM and 3M applications. He also served as a project manager, leading HIM integrated areas such as legal medical record, eMPI conversion, patient confidentiality, and ICD-10 for Baptist\'s nine facilities and 300+ outpatient locations. Evan has served in numerous board and committee positions, including president for the Kentucky Health Information Management Association (KHIMA) and River Valley Health Information Management Association (RvHIMA). He is currently Section Chair (I-1) over Alpha Phi Omega chapters in West and Central Kentucky.  \n \n https://www.linkedin.com/in/evan-harmon-mhi-rhia/',
          true
        )}

        {DisplaySpeakerCard(
          'cindy_hines',
          'Cindy Hines, SHRM-SCP, SPHR, MBA',
          'Cindy Hines is co-owner and COO of C & S Business Group and the Vice President of Talent Development at Leadership Strategies Group. Her extensive experience as a Human Resources and Organizational Development leader includes the fast-moving consumer goods industry, banking, manufacturing and healthcare. She has domestic multi-state and international experience focused on shaping the HR agenda that supports key organizational goals.  She has experience collaborating with manufacturing facilities as well as corporate locations. \n Cindy has overseen the talent acquisition and talent management strategies as well as several corporate and sales department restructurings and Mergers and Acquisitions.  She has led assessment centers across the US that resulted in quality hires and increased retention through selectively hiring and implementing an onboarding process that doesn\'t stop after 90 days.  Her experience includes culminating HQ offices while executing layoffs and location wind down, while keeping respect and concern for the employees as her primary driver. \n She has an MBA from Western Kentucky University and is an adjunct faculty member in the Management Department.  Cindy has authored a chapter in the professional book “What\'s Next in Human Resources” and is also published in “Cultivating Culture”. \n Cindy\'s primary focus is workplace investigations, recruiting hard-to-fill positions, employee surveys, HR compliance including Affirmative Action Plans, and M&A\'s.   Cindy\'s passion is helping people and organizations to reach their fullest potential. She particularly likes to connect top talent to premier companies.',
          true
        )}

        {DisplaySpeakerCard(
          'shannon_houser',
          'Dr. Shannon Houser',
          'Shannon H. Houser, Ph.D., MPH, RHIA, FAHIMA, is a Professor in the Health Services Administration Department and Graduate Program in Health Informatics; a Senior Scientist in the Center for Clinical and Translational Science, General Clinical Research Center, and an Associate Scientist in the Center for AIDS Research at the University of Alabama at Birmingham (UAB).  She is a Visiting Professor at Tsinghua University in China and participated in designing the curriculum and teaching courses in the Masters in Hospital/Healthcare Management. ',
          true
        )}
        
        {/* Speaker backed out. */}
        {/* {DisplaySpeakerCard(
          'mariah_knowles',
          'Mariah A. Knowles',
          'Mariah A. Knowles is a Data Science Facilitator for the American Family Insurance Data Science Institute and Data Science Hub at the University of Wisconsin-Madison, where she meets with researchers across disciplines to provide data science training and consultation. An alumna of WKU, she is a former president of the WKU ACM Student Chapter and former Department Head of the ACM XRDS magazine. She has taught at SKy since 2015 and at UW-Madison since 2018. Her teaching includes database, intro to programming, web, and ethics, and her education includes Information Studies, English Rhetoric, and Computer Sciences. She is a mixed methods researcher, with focuses on data ethics, data ethics education, and emancipatory quantitative ethnography, using data science to boost important social science work such as telling transgender and indigenous stories.',
          true
        )} */}

        {DisplaySpeakerCard(
          'mark_leonhardt',
          'Mark Leonhardt',
          'Mark is a retired Navy Chief, who served his final tour as a Training officer and Naval instructor for Naval Training Center Saint Louis. He went on to serve as a Plant engineer for Georgia Pacific, Weyerhaeuser, and Kingsford manufacturing. During his tenure at Weyerhaeuser, he certified as a Master Trainer and was a corporate trainer for eight years. His past eight year has been spent as a trainer for SKYCTC Work force solutions division where he creates and delivers Engineering/Technical and Leadership training for contracted companies throughout the 10 counties surrounding Bowling Green. He holds a B.S.  in Technical/Vocational Education from Valdosta University Georgia and a M.S. in Engineering and technology management from Western Kentucky University.',
          true
        )}

        {DisplaySpeakerCard(
          'sebastian_leguizamon',
          'Dr. Sebastian Leguizamon',
          'Dr. J. Sebastian Leguizamon is an Associate Professor of Economics within Gordon Ford College of Business at Western Kentucky University.  He holds a Ph.D. in Economics from West Virginia University, Master of Arts in Economics from West Virginia University, Bachelor of Science in Management Information Systems from Davis and Elkins College, and Bachelor of Science in Economics from Davis and Elkins College.  Dr. J. Sebastian Leguizamon\'s main research interests include state and local public finance and regional economics. Additionally, he has done work on prejudice both in the labor and the housing market. Some research has appeared in peer-reviewed journals such as Papers in Regional Science, The Review of Regional Science, Public Finance Review, Journal of Policy Analysis and Management, The National Tax Journal, and Public Choice. Media outlets such as The Atlantic and FiveThirtyEight have highlighted his research on the marriage penalties and subsidies embedded in the tax system.  He serves as an Associate Editor for Revista de Economia del Caribe, a peer-reviewed academic journal housed by Universidad del Norte - a prestigious public university in Colombia, his native country. He has held academic positions at Tulane University and Vanderbilt University.',
          true
        )}

        {DisplaySpeakerCard(
          'art_mcfadden',
          'Art McFadden',
          'I have always had an interest in technology and originally had planned to be in a career related to my bachelor\'s Degree. Upon graduation, I joined the Franklin Police Department.  After a few years of working patrol, a position opened in the Franklin Police Departments Investigations Unit. I was assigned to general investigations, and specialized in crimes involving technology, sexual offenses, and crimes against children.  As crimes involving technology became more common, I saw the need for more formal education in the IT field. I attended Bowling Green Technical College (now Southcentral Kentucky Community and Technical College - SKYCTC), a part of the Kentucky Community & Technical College System. I earned an Associates of Applied Science in Computer and Information Technology, specializing in Network Technologies.  I was fortunate enough to be asked to be on the United States Secret Service Electronic Crimes Task Force. They are given advanced training at the National Computer Forensic Institute in Hover, Alabama. My work with the ECTC was one of the highlights of my career.  I was promoted to Captain, Assistant Chief of Police, a few years before my retirement. That ended my days of investigations. Looking back at my career, I know the most import thing I did was help victims, particularly children, get the justice they deserved.  After retirement, I became an adjunct instructor with SKYCTC which lead to my current full-time position teaching networking and security related classes. These experiences solidified my love and appreciation for SKYCTC as a fantastic place to learn, work, and connect.',
          true
        )}

        {DisplaySpeakerCard(
          'sara_asman',
          'Sarah McQueary',
          'Sarah McQueary is a Senior Software Engineer with over a decade of experience programming solutions that solve client and business needs. Sarah currently focuses on developing an Application Programming Interface (API) with Degreed, a Learning Experience Platform (LXP). She graduated from the KCTCS 2+2 program, several years ago, in Computer Information Technology (CIT). She completed her Bachelor of Science in CIT at Western KY University, and then went on to obtain her Master of Science in Cybersecurity from Liberty University. Currently, Sarah is working towards her PhD in Computer Information Technology at the University of the Cumberlands. As a strong believer in the power of programming to transform lives, Sarah is excited to discuss the craft and how to keep it principled. She also enjoys spending time with her husband and two children, serving in her local church, painting, karaoke, and Crossfit.',
          true
        )}        

        {DisplaySpeakerCard(
          'lois_mcwhorter',
          'Lois McWhorter',
          'I have been an educator, administrator, and entrepreneur in education for several years. I currently serve as the Chair of Education at the University of the Cumberlands - Hutton School of Business, where I continue to support undergraduate and graduate students. My areas of particular interest include Teaching and professional learning, career and professional development (both online and face-to-face), diversity and inclusion, international education, and community outreach. In addition to my academic and professional life, I am passionate about public service. Serving on the Board of Directors for various community and community-based organizations is a high priority.',
          true
        )}     
        
        {DisplaySpeakerCard(
          'andy_mills',
          'Andy Mills',
          'Andy is Cybersecurity Instructor for the New Cybersecurity Program at Somerset Community College. Andy is also a Cloud Engineer with Coalfire building cloud environments to meet federal compliance standards. \n Andy has over 6 years of experience in various fields of Information Technology and Cybersecurity. He has a BS in Computer Science, MS in Cybersecurity and Information Assurance, and holds the CISSP, CEH, AWS DevOps Professional, AWS Security Specialty, and AWS Solutions Architect Associate certifications.',
          true
        )}   

        {DisplaySpeakerCard(
          'rick_nord',
          'Rick Nord',
          'Technical Staff Assistant Rick Nord has been with the USSS since 2000 and was originally assigned to the Washington Field Office. Rick was re-assigned to the USSS Headquarters where he served as a Critical Infrastructure Specialist in the Office of Protective Research. \n Rick has served as a technical security agent responsible for securing venues prior to a protectee \'s arrival from various threats including explosive, fire / life / safety, structural, chemical / biological / radiological and threats to critical cyber systems. \n Rick was designated as the USSS Counterintelligence Program Manager responsible for training agents and officers to assist in the prevention of adversaries obtaining information and / or access of USSS protective methodology.  \n Rick currently serves as the supervisor of the KY Cyber Fraud Task Force (KYCFTF), a network of over 400 law enforcement, financial institution investigators, corporate security, computer forensic examiners and polygraphers responsible for investigating all cybercrimes including fraud, identity theft, social media threats and child exploitation.',
          true
        )}

        {DisplaySpeakerCard(
          'roberta_darnez_pope',
          'Roberta Darnez Pope',
          'Roberta Darnez Pope, MSHI, RHIA, a Health Information Management (HIM) Program Instructor in the College of Health and Human Services (CHHS), Public Health Department, at Western Kentucky University (WKU). She is a graduate of Volunteer State Community College, Trevecca Nazarene University and the University of Illinois at Chicago School of Applied Health Sciences. Her health information management career began at Vanderbilt University Medical Center. At WKU, Pope served on the CHHS-Public Health Research Team.  She has been an active member with AHIMA since 1996 and serves on the AHIMA Foundation of Research Network (AFRN). Her experience includes positions in academia and health information management. She assisted with the Refugee Health Summit which was hosted by the WKU Public Health Department during April 2019. Her practice and research efforts include health information and informatics, population health, health disparities, and HIM education.',
          true
        )}

        {DisplaySpeakerCard(
          'tamela_smith',
          'Dr. Tamela W. Smith',
          'Dr. Smith is a Staff Emeritus from WKU, having retired in 2018 from her position as Manager of Audiovisual Services in IT.  She holds a Master\'s degree in Communication and a Doctorate in Educational Leadership, with an emphasis in Organizational Leadership. She has taught in the areas of Communication and Organizational Leadership, both Undergraduate and Graduate level, for WKU. \n With over 16 years\' experience in the field of video conferencing, her research areas focused on improving communications in computer-mediated environments.  She has presented on video conferencing communications at various national and international conferences.  Dr. Smith served two terms on WKU\'s Board of Regents as the elected Staff Regent, and served a 3-year term on the WKU Alumni Association National Board of Directors, including one year on the Executive Committee. Since retirement she has shifted her research focus and is currently completing her first book.',
          false
        )}

        {DisplaySpeakerCard(
          'stephanie_thacker',
          'Dr. Stephanie Thacker',
          'Dr. Stephanie Thacker is a native of Corbin, KY. She joined the University of the Cumberlands in April 2014 in Graduate Advising, where she assisted graduate education students. Since then, she has served the University in staff and administrative positions. Dr. Thacker has been a member of the Hutton School of Business faculty since 2017, where she teaches general business, management, and marketing courses. She also serves as a dissertation committee member for doctoral students. \n Dr. Thacker completed her graduate and undergraduate studies at the University of the Cumberlands and is currently pursuing a Master\'s in Information Technology from the University of the Cumberlands.  She has a background in management, marketing, and course design and development.  Her research interests lie in leadership, marketing management and strategy, organizational learning and change, and strategic decision-making.',
          true
        )}

        {DisplaySpeakerCard(
          'casey_wilhelm',
          'Casey Wilhelm',
          'Casey Wilhelm is a Professor in Business Administration at North Idaho College and an Adjunct Professor at Boise State University. He is the co-author of Connect Master MIS and Connect Master Investigating Technology for McGraw Hill Education. He has conducted extensive research in Instructional Technology and Design, specifically on the learning styles and traits of Millennial and Gen Z learners.',
          true
        )}

        {DisplaySpeakerCard(
          'sherry_youngquist',
          'Sherry Youngquist',
          'Associate Professor Sherry Youngquist has taught English at SKYCTC for 10 years. She was recently appointed chair of the Wellness Committee at the college.',
          false
        )}                                      

      </div>

    </div>
  )
}

export default BreakoutSessions
