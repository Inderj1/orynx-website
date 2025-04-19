<script setup>
import { ref, onMounted, computed, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

definePageMeta({
    layout: "landing",
    title: "Our Healthcare AI Products - Orynx",
    meta: [
        { hid: 'description', name: 'description', content: 'Discover how we\'re revolutionizing healthcare through innovative AI and ML solutions.' },
        { hid: 'og:title', property: 'og:title', content: 'Our Healthcare AI Products - Orynx' },
        { hid: 'og:description', property: 'og:description', content: 'Discover how we\'re revolutionizing healthcare through innovative AI and ML solutions.' },
        { hid: 'og:image', property: 'og:image', content: 'https://orynx.co.uk/path/to/logo.png' },
        { hid: 'og:url', property: 'og:url', content: 'https://orynx.co.uk/products' },
        { hid: 'twitter:title', name: 'twitter:title', content: 'Our Healthcare AI Products - Orynx' },
        { hid: 'twitter:description', name: 'twitter:description', content: 'Discover how we\'re revolutionizing healthcare through innovative AI and ML solutions.' },
        { hid: 'twitter:image', name: 'twitter:image', content: 'https://orynx.co.uk/path/to/logo.png' },
    ],
    script: [
        {
            type: 'application/ld+json',
            json: {
                '@context': 'https://schema.org',
                '@type': 'ItemList',
                name: 'Orynx Healthcare AI Products',
                itemListElement: [
                    {
                        '@type': 'ListItem',
                        position: 1,
                        url: 'https://orynx.co.uk/products/ai-foot-drop-calculation',
                        name: 'AI-Assisted Foot Drop Calculation',
                        description: 'Developed at Queen Margaret University, this innovative research project leverages AI and machine learning to revolutionize the management of foot drop, enhancing shared decisionmaking and patient-centered care.'
                    },
                    {
                        '@type': 'ListItem',
                        position: 2,
                        url: 'https://orynx.co.uk/products/healthcare-learning-simulation',
                        name: 'Healthcare Learning Simulation APP',
                        description: 'A groundbreaking advancement in medical education, leveraging AI and augmented reality to transform how healthcare professionals learn and practice.'
                    }
                ]
            }
        }
    ]
});

const categories = ref(['All', 'AI/ML', 'Healthcare', 'Infrastructure', 'Cloud Solutions', 'Education']);
const selectedCategory = ref('All');
const selectedProduct = ref(null);

// Get product from query parameter
onMounted(() => {
    if (route.query.product) {
        selectedProduct.value = route.query.product;
    }
});

// Watch for route changes to update selected product
watch(() => route.query.product, (newProduct) => {
    if (newProduct) {
        selectedProduct.value = newProduct;
    } else {
        selectedProduct.value = null;
    }
});

const products = ref([
    // Existing products
    {
        id: 1,
        category: 'AI/ML',
        title: 'AI-Assisted Foot Drop Calculation',
        description: 'Developed at Queen Margaret University, this innovative research project leverages AI and machine learning to revolutionize the management of foot drop, enhancing shared decisionmaking and patient-centered care.',
        features: [
            {
                title: 'Machine learning for accurate gait analysis',
                description: 'Advanced ML algorithms analyze gait patterns to provide precise biomechanical measurements.'
            },
            {
                title: 'AI-driven decision support for clinicians',
                description: 'Intelligent system assists healthcare providers in making informed treatment decisions.'
            },
            {
                title: 'User-friendly interface using common smart devices',
                description: 'Utilizes video from smart devices to analyze gait biomechanics.'
            },
            {
                title: 'Validated against high-end research equipment',
                description: 'Validated against the industry-leading VICON system for gold standard accuracy.'
            }
        ]
    },
    {
        id: 2,
        category: 'Education',
        title: 'Healthcare Learning Simulation APP',
        description: 'Our Learning Simulation APP represents a groundbreaking advancement in medical education, leveraging the power of artificial intelligence (AI) and augmented reality (AR) to transform how healthcare professionals learn and practice.',
        features: [
            {
                title: 'Virtual Patient Interaction',
                description: 'Medical students and healthcare professionals can engage with highly realistic virtual patients, simulating real-life clinical scenarios.'
            },
            {
                title: 'AI-Driven Scenarios',
                description: 'Advanced AI algorithms create dynamic, responsive patient cases that adapt to the learner\'s decisions and actions.'
            },
            {
                title: 'Augmented Reality Integration',
                description: 'AR technology overlays digital information onto the physical world, allowing for immersive, hands-on learning experiences.'
            },
            {
                title: 'Real-time Feedback',
                description: 'AI provides immediate, personalized feedback on learner performance, enhancing the educational experience.'
            }
        ]
    },
    {
        id: 3,
        category: 'AI/ML',
        title: 'Orynx AI',
        description: 'Revolutionizing Healthcare Education with AI-Powered Simulation. Our cutting-edge platform bridges the gap between classroom theory and clinical practice, creating immersive, realistic learning environments that prepare healthcare professionals for real-world patient encounters.',
        longDescription: `
            <div class="bg-gradient-to-b from-blue-50 to-white py-12 px-6 rounded-t-3xl -mt-8 mb-12 border-b-4 border-blue-500">
                <h2 class="text-4xl font-bold mb-4 text-center text-blue-800">Orynx AI: Revolutionizing Healthcare Education</h2>
                <h3 class="text-2xl font-semibold mb-8 text-center text-blue-600">Transform Your Medical Training with AI-Powered Simulation</h3>
                <div class="max-w-3xl mx-auto">
                    <p class="text-lg leading-relaxed mb-6">Orynx AI delivers a cutting-edge healthcare simulation platform designed to bridge the gap between classroom theory and clinical practice. Our advanced AI-driven technology creates immersive, realistic learning environments that prepare healthcare professionals for real-world patient encounters.</p>
                </div>
            </div>
            
            <div class="max-w-5xl mx-auto px-4">
                <div class="bg-blue-600 text-white p-8 rounded-xl shadow-lg mb-16">
                    <h3 class="text-2xl font-bold mb-4">Why Choose Orynx AI?</h3>
                    <p class="text-lg leading-relaxed">Healthcare education faces unprecedented challenges: limited clinical placement opportunities, instructor shortages, and the need for standardized training experiences. Orynx AI addresses these challenges head-on with our innovative simulation platform that makes medical training more accessible, consistent, and effective.</p>
                </div>
                
                <h3 class="text-3xl font-bold mb-8 text-center text-blue-800 border-b-2 border-blue-300 pb-3">Core Features</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border-l-4 border-blue-500">
                        <h4 class="text-xl font-bold mb-3 text-blue-700 flex items-center">
                            <span class="text-3xl mr-3">🤖</span> Advanced AI-Powered Simulation
                        </h4>
                        <p class="text-gray-700">Our proprietary artificial intelligence engine creates realistic clinical scenarios and patient interactions that adapt in real-time to learner decisions and actions, providing a truly dynamic educational experience.</p>
                    </div>
                    
                    <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border-l-4 border-green-500">
                        <h4 class="text-xl font-bold mb-3 text-green-700 flex items-center">
                            <span class="text-3xl mr-3">👥</span> Lifelike Virtual Patients
                        </h4>
                        <p class="text-gray-700">Interact with detailed virtual patients that present with authentic symptoms, medical histories, and communication styles. Our virtual patients respond naturally to questions and interventions, creating believable clinical encounters.</p>
                    </div>
                    
                    <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border-l-4 border-purple-500">
                        <h4 class="text-xl font-bold mb-3 text-purple-700 flex items-center">
                            <span class="text-3xl mr-3">📊</span> Comprehensive Performance Analytics
                        </h4>
                        <p class="text-gray-700">Track individual and group progress with detailed metrics that identify strengths and areas for improvement. Our analytics dashboard provides actionable insights for both learners and educators.</p>
                    </div>
                    
                    <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border-l-4 border-yellow-500">
                        <h4 class="text-xl font-bold mb-3 text-yellow-700 flex items-center">
                            <span class="text-3xl mr-3">🔄</span> Personalized Learning Pathways
                        </h4>
                        <p class="text-gray-700">No two learners are alike. Our adaptive platform customizes the educational journey based on individual performance, focusing on areas that need reinforcement while advancing through mastered content.</p>
                    </div>
                    
                    <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border-l-4 border-red-500">
                        <h4 class="text-xl font-bold mb-3 text-red-700 flex items-center">
                            <span class="text-3xl mr-3">👩‍⚕️</span> Collaborative Learning Tools
                        </h4>
                        <p class="text-gray-700">Foster teamwork and interprofessional education with shared cases and group scenarios that mirror the collaborative nature of modern healthcare delivery.</p>
                    </div>
                    
                    <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border-l-4 border-indigo-500">
                        <h4 class="text-xl font-bold mb-3 text-indigo-700 flex items-center">
                            <span class="text-3xl mr-3">📱</span> Accessible Anywhere, Anytime
                        </h4>
                        <p class="text-gray-700">Access the platform from any device with an internet connection. Train on your schedule, whether on campus, at home, or on clinical rotations.</p>
                    </div>
                    
                    <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border-l-4 border-teal-500">
                        <h4 class="text-xl font-bold mb-3 text-teal-700 flex items-center">
                            <span class="text-3xl mr-3">🛡️</span> Risk-Free Practice Environment
                        </h4>
                        <p class="text-gray-700">Learn from mistakes without compromising patient safety. Practice rare or high-risk scenarios repeatedly in a controlled environment before facing similar situations in clinical practice.</p>
                    </div>
                    
                    <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border-l-4 border-pink-500">
                        <h4 class="text-xl font-bold mb-3 text-pink-700 flex items-center">
                            <span class="text-3xl mr-3">🧪</span> Evidence-Based Learning Methodology
                        </h4>
                        <p class="text-gray-700">Our platform incorporates proven educational theories and instructional design principles to maximize knowledge retention and skill transfer.</p>
                    </div>
                </div>
                
                <div class="bg-gradient-to-r from-blue-100 to-indigo-100 p-8 rounded-xl mb-16">
                    <h3 class="text-3xl font-bold mb-8 text-center text-blue-800">Applications Across Healthcare Education</h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                            <h4 class="text-xl font-bold mb-3 text-blue-700">Medical Schools</h4>
                            <ul class="list-disc pl-5 text-gray-700 space-y-2">
                                <li>Standardize clinical experiences across student cohorts</li>
                                <li>Supplement limited clinical placements</li>
                                <li>Prepare students for clinical rotations and assessments</li>
                            </ul>
                        </div>
                        
                        <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                            <h4 class="text-xl font-bold mb-3 text-blue-700">Nursing Programs</h4>
                            <ul class="list-disc pl-5 text-gray-700 space-y-2">
                                <li>Develop clinical reasoning skills</li>
                                <li>Practice communication in challenging situations</li>
                                <li>Train for high-acuity events in a safe environment</li>
                            </ul>
                        </div>
                        
                        <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                            <h4 class="text-xl font-bold mb-3 text-blue-700">Allied Health Programs</h4>
                            <ul class="list-disc pl-5 text-gray-700 space-y-2">
                                <li>Create interprofessional learning opportunities</li>
                                <li>Develop profession-specific interventions</li>
                                <li>Practice patient education techniques</li>
                            </ul>
                        </div>
                        
                        <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                            <h4 class="text-xl font-bold mb-3 text-blue-700">Hospitals & Health Systems</h4>
                            <ul class="list-disc pl-5 text-gray-700 space-y-2">
                                <li>Maintain competencies for practicing clinicians</li>
                                <li>Onboard new staff efficiently</li>
                                <li>Implement facility-wide training initiatives</li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                <h3 class="text-3xl font-bold mb-8 text-center text-blue-800 border-b-2 border-blue-300 pb-3">Success Stories</h3>
                <div class="mb-16 bg-gray-50 p-8 rounded-xl">
                    <blockquote class="italic border-l-4 border-blue-500 pl-6 py-3 mb-8 bg-white rounded-r-xl shadow-md">
                        <p class="text-lg text-gray-700 mb-4">"Implementing Orynx AI transformed our curriculum by providing consistent, high-quality clinical experiences for all students, regardless of clinical site placement. Students report feeling more confident and better prepared for patient interactions."</p>
                        <footer class="text-right">
                            <p class="font-bold text-blue-700">Dr. Sarah Chen</p>
                            <p class="text-sm text-gray-600">Medical Education Director</p>
                        </footer>
                    </blockquote>
                    
                    <blockquote class="italic border-l-4 border-blue-500 pl-6 py-3 bg-white rounded-r-xl shadow-md">
                        <p class="text-lg text-gray-700 mb-4">"The analytics dashboard has been invaluable for identifying educational gaps and adapting our teaching strategies. We've seen measurable improvements in clinical reasoning and communication skills among our nursing students."</p>
                        <footer class="text-right">
                            <p class="font-bold text-blue-700">Professor James Rodriguez</p>
                            <p class="text-sm text-gray-600">Nursing Faculty</p>
                        </footer>
                    </blockquote>
                </div>
                
                <div class="bg-blue-700 text-white p-8 rounded-xl shadow-lg mb-16">
                    <h3 class="text-3xl font-bold mb-6 text-center">Get Started Today</h3>
                    <p class="text-lg mb-6 text-center">Join the growing community of healthcare educators and institutions transforming medical education with Orynx AI.</p>
                    <div class="flex flex-col md:flex-row justify-center gap-6 mb-8">
                        <div class="bg-white text-blue-800 p-4 rounded-lg text-center shadow-md hover:shadow-xl transition-shadow duration-300 flex-1 max-w-xs mx-auto">
                            <h4 class="font-bold text-xl mb-2">Request a Demo</h4>
                            <p>See the platform in action with a personalized demonstration</p>
                        </div>
                        <div class="bg-white text-blue-800 p-4 rounded-lg text-center shadow-md hover:shadow-xl transition-shadow duration-300 flex-1 max-w-xs mx-auto">
                            <h4 class="font-bold text-xl mb-2">Pilot Program</h4>
                            <p>Start with a limited implementation to evaluate effectiveness</p>
                        </div>
                        <div class="bg-white text-blue-800 p-4 rounded-lg text-center shadow-md hover:shadow-xl transition-shadow duration-300 flex-1 max-w-xs mx-auto">
                            <h4 class="font-bold text-xl mb-2">Full Implementation</h4>
                            <p>Scale to a comprehensive solution across your institution</p>
                        </div>
                    </div>
                    <p class="text-center mb-6">Contact our education specialists to learn how Orynx AI can enhance your healthcare education program and prepare your learners for excellence in patient care.</p>
                    <div class="flex flex-col md:flex-row justify-center gap-8 items-center">
                        <div class="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <span class="font-bold">info@orynx.co.uk</span>
                        </div>
                        <div class="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            <span class="font-bold">(555) 123-4567</span>
                        </div>
                    </div>
                </div>
                
                <h3 class="text-3xl font-bold mb-8 text-center text-blue-800 border-b-2 border-blue-300 pb-3">Frequently Asked Questions</h3>
                <div class="space-y-6 mb-12">
                    <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                        <h4 class="text-xl font-bold mb-3 text-blue-700">Q: How does Orynx AI differ from traditional simulation methods?</h4>
                        <p class="text-gray-700">A: Unlike traditional mannequin-based simulation or standardized patients, Orynx AI provides unlimited access to diverse patient scenarios, consistent experiences across learners, detailed analytics, and the ability to train anytime, anywhere.</p>
                    </div>
                    
                    <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                        <h4 class="text-xl font-bold mb-3 text-blue-700">Q: What types of healthcare scenarios does the platform support?</h4>
                        <p class="text-gray-700">A: Our library includes hundreds of scenarios across specialties including emergency medicine, primary care, pediatrics, geriatrics, mental health, and more. We regularly add new scenarios based on user feedback and emerging healthcare needs.</p>
                    </div>
                    
                    <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                        <h4 class="text-xl font-bold mb-3 text-blue-700">Q: Can we customize scenarios for our specific curriculum?</h4>
                        <p class="text-gray-700">A: Absolutely. Our platform allows educators to modify existing scenarios or create custom cases that align with your specific learning objectives and curriculum requirements.</p>
                    </div>
                    
                    <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                        <h4 class="text-xl font-bold mb-3 text-blue-700">Q: What technical requirements are needed to use Orynx AI?</h4>
                        <p class="text-gray-700">A: The platform is cloud-based and accessible from any modern web browser. No special hardware is required, although the experience is enhanced with quality audio capabilities.</p>
                    </div>
                    
                    <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                        <h4 class="text-xl font-bold mb-3 text-blue-700">Q: How do you ensure the clinical accuracy of your simulations?</h4>
                        <p class="text-gray-700">A: All scenarios are developed by a multidisciplinary team of clinical experts and undergo rigorous peer review before release. We regularly update content to reflect current evidence-based practice guidelines.</p>
                    </div>
                    
                    <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                        <h4 class="text-xl font-bold mb-3 text-blue-700">Q: Is implementation support available?</h4>
                        <p class="text-gray-700">A: Yes. Our dedicated education specialists provide comprehensive onboarding, faculty training, and ongoing support to ensure successful implementation and integration with your existing curriculum.</p>
                    </div>
                </div>
            </div>
        `,
        features: [
            {
                title: 'Advanced AI-Powered Simulation',
                description: 'Our proprietary artificial intelligence engine creates realistic clinical scenarios and patient interactions that adapt in real-time to learner decisions.'
            },
            {
                title: 'Lifelike Virtual Patients',
                description: 'Interact with detailed virtual patients that present with authentic symptoms, medical histories, and communication styles.'
            },
            {
                title: 'Comprehensive Performance Analytics',
                description: 'Track individual and group progress with detailed metrics that identify strengths and areas for improvement.'
            },
            {
                title: 'Personalized Learning Pathways',
                description: 'Our adaptive platform customizes the educational journey based on individual performance and learning needs.'
            }
        ]
    },
    {
        id: 4,
        category: 'Infrastructure',
        title: 'Orynx Labs',
        description: 'Our research and development division focused on creating cutting-edge healthcare technology solutions and exploring new applications of AI in medicine.',
        longDescription: `
            <div class="bg-gradient-to-b from-purple-50 to-white py-12 px-6 rounded-t-3xl -mt-8 mb-12 border-b-4 border-purple-500">
                <h2 class="text-4xl font-bold mb-4 text-center text-purple-800">Orynx Labs: Pioneering Healthcare Innovation</h2>
                <h3 class="text-2xl font-semibold mb-8 text-center text-purple-600">Where Breakthrough Ideas Transform Healthcare Delivery</h3>
                <div class="max-w-3xl mx-auto">
                    <p class="text-lg leading-relaxed mb-6">Orynx Labs is our dedicated research and development division, focused on creating cutting-edge healthcare technology solutions and exploring new applications of AI in medicine. We bring together brilliant minds, advanced technologies, and clinical expertise to solve healthcare's most pressing challenges.</p>
                </div>
            </div>
            
            <div class="max-w-5xl mx-auto px-4">
                <div class="bg-purple-600 text-white p-8 rounded-xl shadow-lg mb-16">
                    <h3 class="text-2xl font-bold mb-4">The Orynx Labs Difference</h3>
                    <p class="text-lg leading-relaxed">At Orynx Labs, we believe that transformative healthcare solutions emerge at the intersection of clinical expertise, technological innovation, and human-centered design. Our multidisciplinary teams work collaboratively to identify healthcare challenges, develop innovative solutions, and rigorously test them in real-world settings.</p>
                </div>
                
                <h3 class="text-3xl font-bold mb-8 text-center text-purple-800 border-b-2 border-purple-300 pb-3">Our Approach</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border-l-4 border-purple-500">
                        <h4 class="text-xl font-bold mb-3 text-purple-700 flex items-center">
                            <span class="text-3xl mr-3">🔬</span> Innovation Incubator
                        </h4>
                        <p class="text-gray-700">Our dedicated environment for developing and testing new healthcare technology concepts fosters creativity and breakthrough thinking. We provide the resources, expertise, and freedom necessary for innovation to flourish.</p>
                    </div>
                    
                    <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border-l-4 border-blue-500">
                        <h4 class="text-xl font-bold mb-3 text-blue-700 flex items-center">
                            <span class="text-3xl mr-3">🤝</span> Research Partnerships
                        </h4>
                        <p class="text-gray-700">We forge strong collaborations with leading academic institutions and healthcare organizations worldwide. These partnerships bring diverse perspectives and expertise to our projects, accelerating innovation and ensuring clinical relevance.</p>
                    </div>
                    
                    <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border-l-4 border-green-500">
                        <h4 class="text-xl font-bold mb-3 text-green-700 flex items-center">
                            <span class="text-3xl mr-3">⚡</span> Prototype Development
                        </h4>
                        <p class="text-gray-700">Our rapid prototyping and validation processes allow us to quickly transform concepts into tangible solutions. We iterate based on feedback from healthcare professionals and patients, ensuring our innovations address real needs effectively.</p>
                    </div>
                    
                    <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border-l-4 border-orange-500">
                        <h4 class="text-xl font-bold mb-3 text-orange-700 flex items-center">
                            <span class="text-3xl mr-3">🚀</span> Technology Transfer
                        </h4>
                        <p class="text-gray-700">We've developed a streamlined process for moving innovations from lab to market. Our technology transfer approach ensures that promising solutions can quickly reach healthcare providers and patients who need them most.</p>
                    </div>
                </div>
                
                <div class="bg-gradient-to-r from-purple-100 to-indigo-100 p-8 rounded-xl mb-16">
                    <h3 class="text-3xl font-bold mb-8 text-center text-purple-800">Current Research Focus Areas</h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                            <h4 class="text-xl font-bold mb-3 text-purple-700">AI-Powered Diagnostics</h4>
                            <p class="text-gray-700 mb-4">Developing advanced machine learning algorithms to assist healthcare providers in diagnosing complex conditions with greater accuracy and speed.</p>
                            <ul class="list-disc pl-5 text-gray-700 space-y-2">
                                <li>Computer vision for medical imaging analysis</li>
                                <li>Natural language processing for clinical documentation</li>
                                <li>Multimodal data integration for comprehensive diagnosis</li>
                            </ul>
                        </div>
                        
                        <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                            <h4 class="text-xl font-bold mb-3 text-purple-700">Remote Patient Monitoring</h4>
                            <p class="text-gray-700 mb-4">Creating innovative solutions for continuous patient monitoring outside traditional healthcare settings.</p>
                            <ul class="list-disc pl-5 text-gray-700 space-y-2">
                                <li>Wearable sensor technology development</li>
                                <li>AI-driven anomaly detection algorithms</li>
                                <li>Secure data transmission and privacy frameworks</li>
                            </ul>
                        </div>
                        
                        <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                            <h4 class="text-xl font-bold mb-3 text-purple-700">Personalized Medicine</h4>
                            <p class="text-gray-700 mb-4">Advancing technologies that enable truly individualized healthcare approaches.</p>
                            <ul class="list-disc pl-5 text-gray-700 space-y-2">
                                <li>Genomic data analysis tools</li>
                                <li>Treatment response prediction models</li>
                                <li>Patient-specific intervention optimization</li>
                            </ul>
                        </div>
                        
                        <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                            <h4 class="text-xl font-bold mb-3 text-purple-700">Healthcare Workflow Optimization</h4>
                            <p class="text-gray-700 mb-4">Developing systems to improve efficiency and reduce burden on healthcare providers.</p>
                            <ul class="list-disc pl-5 text-gray-700 space-y-2">
                                <li>Intelligent scheduling and resource allocation</li>
                                <li>Automated documentation and coding assistance</li>
                                <li>Clinical decision support systems</li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                <h3 class="text-3xl font-bold mb-8 text-center text-purple-800 border-b-2 border-purple-300 pb-3">Innovation Process</h3>
                <div class="mb-16">
                    <div class="flex flex-col md:flex-row gap-4 mb-8">
                        <div class="bg-white p-6 rounded-xl shadow-md flex-1 border-t-4 border-purple-500">
                            <div class="flex items-center mb-4">
                                <span class="bg-purple-600 text-white text-xl font-bold rounded-full w-10 h-10 flex items-center justify-center mr-4">1</span>
                                <h4 class="text-xl font-bold text-purple-700">Problem Identification</h4>
                            </div>
                            <p class="text-gray-700">We work closely with healthcare providers, patients, and stakeholders to identify critical challenges that technology can help solve.</p>
                        </div>
                        
                        <div class="bg-white p-6 rounded-xl shadow-md flex-1 border-t-4 border-blue-500">
                            <div class="flex items-center mb-4">
                                <span class="bg-blue-600 text-white text-xl font-bold rounded-full w-10 h-10 flex items-center justify-center mr-4">2</span>
                                <h4 class="text-xl font-bold text-blue-700">Concept Development</h4>
                            </div>
                            <p class="text-gray-700">Our multidisciplinary teams brainstorm and develop innovative concepts that leverage cutting-edge technologies to address identified challenges.</p>
                        </div>
                    </div>
                    
                    <div class="flex flex-col md:flex-row gap-4 mb-8">
                        <div class="bg-white p-6 rounded-xl shadow-md flex-1 border-t-4 border-green-500">
                            <div class="flex items-center mb-4">
                                <span class="bg-green-600 text-white text-xl font-bold rounded-full w-10 h-10 flex items-center justify-center mr-4">3</span>
                                <h4 class="text-xl font-bold text-green-700">Prototype & Testing</h4>
                            </div>
                            <p class="text-gray-700">We rapidly develop prototypes and conduct rigorous testing with real users to validate concepts and gather feedback for refinement.</p>
                        </div>
                        
                        <div class="bg-white p-6 rounded-xl shadow-md flex-1 border-t-4 border-orange-500">
                            <div class="flex items-center mb-4">
                                <span class="bg-orange-600 text-white text-xl font-bold rounded-full w-10 h-10 flex items-center justify-center mr-4">4</span>
                                <h4 class="text-xl font-bold text-orange-700">Refinement & Validation</h4>
                            </div>
                            <p class="text-gray-700">Based on testing results, we refine our solutions and conduct more extensive validation to ensure effectiveness and usability.</p>
                        </div>
                    </div>
                    
                    <div class="flex flex-col md:flex-row gap-4">
                        <div class="bg-white p-6 rounded-xl shadow-md flex-1 border-t-4 border-red-500">
                            <div class="flex items-center mb-4">
                                <span class="bg-red-600 text-white text-xl font-bold rounded-full w-10 h-10 flex items-center justify-center mr-4">5</span>
                                <h4 class="text-xl font-bold text-red-700">Technology Transfer</h4>
                            </div>
                            <p class="text-gray-700">Successful innovations are prepared for wider implementation, with comprehensive documentation, training materials, and support systems.</p>
                        </div>
                        
                        <div class="bg-white p-6 rounded-xl shadow-md flex-1 border-t-4 border-indigo-500">
                            <div class="flex items-center mb-4">
                                <span class="bg-indigo-600 text-white text-xl font-bold rounded-full w-10 h-10 flex items-center justify-center mr-4">6</span>
                                <h4 class="text-xl font-bold text-indigo-700">Continuous Improvement</h4>
                            </div>
                            <p class="text-gray-700">We maintain ongoing relationships with users of our technologies, gathering data and feedback to drive continuous improvement and evolution.</p>
                        </div>
                    </div>
                </div>
                
                <div class="bg-purple-700 text-white p-8 rounded-xl shadow-lg mb-16">
                    <h3 class="text-3xl font-bold mb-6 text-center">Partner With Us</h3>
                    <p class="text-lg mb-6 text-center">Orynx Labs is always seeking new partnerships with healthcare organizations, academic institutions, and technology companies that share our vision for transforming healthcare through innovation.</p>
                    <div class="flex flex-col md:flex-row justify-center gap-6 mb-8">
                        <div class="bg-white text-purple-800 p-4 rounded-lg text-center shadow-md hover:shadow-xl transition-shadow duration-300 flex-1 max-w-xs mx-auto">
                            <h4 class="font-bold text-xl mb-2">Research Collaboration</h4>
                            <p>Partner with our research teams on joint projects that leverage our combined expertise</p>
                        </div>
                        <div class="bg-white text-purple-800 p-4 rounded-lg text-center shadow-md hover:shadow-xl transition-shadow duration-300 flex-1 max-w-xs mx-auto">
                            <h4 class="font-bold text-xl mb-2">Technology Licensing</h4>
                            <p>License our innovative technologies to enhance your healthcare offerings</p>
                        </div>
                        <div class="bg-white text-purple-800 p-4 rounded-lg text-center shadow-md hover:shadow-xl transition-shadow duration-300 flex-1 max-w-xs mx-auto">
                            <h4 class="font-bold text-xl mb-2">Custom Development</h4>
                            <p>Work with us to develop tailored solutions for your specific healthcare challenges</p>
                        </div>
                    </div>
                    <p class="text-center mb-6">Contact our partnership team to explore collaboration opportunities that can help advance healthcare innovation.</p>
                    <div class="flex flex-col md:flex-row justify-center gap-8 items-center">
                        <div class="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <span class="font-bold">labs@orynx.co.uk</span>
                        </div>
                        <div class="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            <span class="font-bold">(555) 234-5678</span>
                        </div>
                    </div>
                </div>
                
                <h3 class="text-3xl font-bold mb-8 text-center text-purple-800 border-b-2 border-purple-300 pb-3">Frequently Asked Questions</h3>
                <div class="space-y-6 mb-12">
                    <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                        <h4 class="text-xl font-bold mb-3 text-purple-700">Q: How can my organization collaborate with Orynx Labs?</h4>
                        <p class="text-gray-700">A: We offer several collaboration models, including research partnerships, technology licensing, and custom development projects. Contact our partnership team to discuss which option best suits your needs.</p>
                    </div>
                    
                    <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                        <h4 class="text-xl font-bold mb-3 text-purple-700">Q: What types of healthcare challenges does Orynx Labs focus on?</h4>
                        <p class="text-gray-700">A: We focus on a range of healthcare challenges, with particular emphasis on AI-powered diagnostics, remote patient monitoring, personalized medicine, and healthcare workflow optimization. However, we're always open to exploring new areas where technology can make a significant impact.</p>
                    </div>
                    
                    <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                        <h4 class="text-xl font-bold mb-3 text-purple-700">Q: How does Orynx Labs approach data privacy and security?</h4>
                        <p class="text-gray-700">A: Data privacy and security are foundational to our work. We adhere to all relevant regulations (including HIPAA and GDPR), implement robust security measures in all our technologies, and follow privacy-by-design principles throughout our development process.</p>
                    </div>
                    
                    <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                        <h4 class="text-xl font-bold mb-3 text-purple-700">Q: Can Orynx Labs develop custom solutions for specific healthcare challenges?</h4>
                        <p class="text-gray-700">A: Yes, we regularly work with healthcare organizations to develop custom solutions for their specific challenges. Our multidisciplinary teams bring expertise in AI, software development, user experience design, and healthcare to create effective, tailored solutions.</p>
                    </div>
                    
                    <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                        <h4 class="text-xl font-bold mb-3 text-purple-700">Q: How does Orynx Labs ensure its innovations are clinically relevant and effective?</h4>
                        <p class="text-gray-700">A: We involve healthcare professionals throughout our development process, from initial problem identification to final validation. We also conduct rigorous testing in real-world settings and collaborate with academic institutions to evaluate the clinical impact of our innovations.</p>
                    </div>
                </div>
            </div>
        `,
        features: [
            {
                title: 'Innovation Incubator',
                description: 'A dedicated environment for developing and testing new healthcare technology concepts.'
            },
            {
                title: 'Research Partnerships',
                description: 'Collaborations with leading academic institutions and healthcare organizations.'
            },
            {
                title: 'Prototype Development',
                description: 'Rapid prototyping and validation of new healthcare solutions.'
            },
            {
                title: 'Technology Transfer',
                description: 'Streamlined process for moving innovations from lab to market.'
            }
        ]
    },
    {
        id: 5,
        category: 'Healthcare',
        title: 'MediSynth',
        description: 'A comprehensive platform for synthesizing and analyzing medical data from diverse sources to generate actionable insights for healthcare providers.',
        longDescription: `
            <div class="bg-gradient-to-b from-teal-50 to-white py-12 px-6 rounded-t-3xl -mt-8 mb-12 border-b-4 border-teal-500">
                <h2 class="text-4xl font-bold mb-4 text-center text-teal-800">MediSynth: Transforming Healthcare Data into Action</h2>
                <h3 class="text-2xl font-semibold mb-8 text-center text-teal-600">Unlock the Full Potential of Your Healthcare Data</h3>
                <div class="max-w-3xl mx-auto">
                    <p class="text-lg leading-relaxed mb-6">MediSynth is a comprehensive platform for synthesizing and analyzing medical data from diverse sources to generate actionable insights for healthcare providers. Our powerful solution transforms fragmented healthcare information into a unified, accessible resource that drives better clinical decisions and operational efficiency.</p>
                </div>
            </div>
            
            <div class="max-w-5xl mx-auto px-4">
                <div class="bg-teal-600 text-white p-8 rounded-xl shadow-lg mb-16">
                    <h3 class="text-2xl font-bold mb-4">The Data Challenge in Healthcare</h3>
                    <p class="text-lg leading-relaxed">Healthcare organizations are drowning in data but starving for insights. Electronic health records, medical devices, wearables, insurance claims, and patient-reported outcomes all generate valuable information, but this data often exists in silos, making it difficult to extract meaningful patterns and actionable intelligence. MediSynth bridges these gaps, creating a unified data ecosystem that transforms raw information into clinical and operational value.</p>
                </div>
                
                <h3 class="text-3xl font-bold mb-8 text-center text-teal-800 border-b-2 border-teal-300 pb-3">Core Capabilities</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border-l-4 border-teal-500">
                        <h4 class="text-xl font-bold mb-3 text-teal-700 flex items-center">
                            <span class="text-3xl mr-3">🔄</span> Data Integration
                        </h4>
                        <p class="text-gray-700">Our platform seamlessly combines data from EHRs, medical devices, wearables, and other sources. MediSynth's advanced connectors and data transformation capabilities ensure that information flows smoothly across your healthcare ecosystem, creating a single source of truth.</p>
                    </div>
                    
                    <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border-l-4 border-blue-500">
                        <h4 class="text-xl font-bold mb-3 text-blue-700 flex items-center">
                            <span class="text-3xl mr-3">📊</span> Advanced Analytics
                        </h4>
                        <p class="text-gray-700">Leverage powerful analytical tools for identifying patterns and trends in healthcare data. Our AI-driven analytics engine processes vast amounts of information to uncover insights that would be impossible to detect manually, helping you identify opportunities for improved care and efficiency.</p>
                    </div>
                    
                    <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border-l-4 border-green-500">
                        <h4 class="text-xl font-bold mb-3 text-green-700 flex items-center">
                            <span class="text-3xl mr-3">📈</span> Visualization Tools
                        </h4>
                        <p class="text-gray-700">Access intuitive dashboards and reports that make complex medical data accessible. MediSynth transforms dense information into clear, actionable visualizations that help clinicians and administrators quickly grasp key insights and make informed decisions.</p>
                    </div>
                    
                    <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border-l-4 border-purple-500">
                        <h4 class="text-xl font-bold mb-3 text-purple-700 flex items-center">
                            <span class="text-3xl mr-3">🔒</span> Secure Collaboration
                        </h4>
                        <p class="text-gray-700">Enable HIPAA-compliant sharing capabilities for multidisciplinary teams. Our platform ensures that the right information reaches the right people at the right time, while maintaining the highest standards of data security and patient privacy.</p>
                    </div>
                </div>
                
                <div class="bg-gradient-to-r from-teal-100 to-blue-100 p-8 rounded-xl mb-16">
                    <h3 class="text-3xl font-bold mb-8 text-center text-teal-800">Key Benefits</h3>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                        <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div class="text-center mb-4">
                                <span class="text-5xl">⏱️</span>
                            </div>
                            <h4 class="text-xl font-bold mb-3 text-teal-700 text-center">Reduced Time to Insight</h4>
                            <p class="text-gray-700">Decrease the time required to transform raw data into actionable intelligence from weeks to minutes, enabling faster clinical and operational decision-making.</p>
                        </div>
                        
                        <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div class="text-center mb-4">
                                <span class="text-5xl">🔍</span>
                            </div>
                            <h4 class="text-xl font-bold mb-3 text-teal-700 text-center">Enhanced Clinical Decision Support</h4>
                            <p class="text-gray-700">Provide clinicians with comprehensive, contextual information at the point of care, improving diagnostic accuracy and treatment planning.</p>
                        </div>
                        
                        <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div class="text-center mb-4">
                                <span class="text-5xl">📉</span>
                            </div>
                            <h4 class="text-xl font-bold mb-3 text-teal-700 text-center">Operational Efficiency</h4>
                            <p class="text-gray-700">Identify bottlenecks, optimize resource allocation, and streamline workflows to reduce costs and improve healthcare delivery.</p>
                        </div>
                        
                        <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div class="text-center mb-4">
                                <span class="text-5xl">🔮</span>
                            </div>
                            <h4 class="text-xl font-bold mb-3 text-teal-700 text-center">Predictive Capabilities</h4>
                            <p class="text-gray-700">Anticipate patient needs, disease progression, and resource requirements with advanced predictive models that learn from your organization's unique data patterns.</p>
                        </div>
                        
                        <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div class="text-center mb-4">
                                <span class="text-5xl">📋</span>
                            </div>
                            <h4 class="text-xl font-bold mb-3 text-teal-700 text-center">Regulatory Compliance</h4>
                            <p class="text-gray-700">Simplify reporting and documentation for regulatory requirements with automated data collection and standardized reporting templates.</p>
                        </div>
                        
                        <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div class="text-center mb-4">
                                <span class="text-5xl">🔬</span>
                            </div>
                            <h4 class="text-xl font-bold mb-3 text-teal-700 text-center">Research Acceleration</h4>
                            <p class="text-gray-700">Enable faster, more comprehensive clinical research by providing easy access to de-identified, aggregated data sets that span diverse patient populations.</p>
                        </div>
                    </div>
                </div>
                
                <h3 class="text-3xl font-bold mb-8 text-center text-teal-800 border-b-2 border-teal-300 pb-3">Use Cases</h3>
                <div class="mb-16">
                    <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 mb-6">
                        <h4 class="text-xl font-bold mb-3 text-teal-700">Population Health Management</h4>
                        <p class="text-gray-700 mb-4">A large healthcare system used MediSynth to integrate data from their EHR, claims database, and social determinants of health information to identify high-risk patient populations. By creating comprehensive patient profiles, they implemented targeted interventions that reduced hospital readmissions by 23% and improved chronic disease management outcomes.</p>
                        <div class="bg-teal-50 p-4 rounded-lg">
                            <p class="text-sm text-teal-800 italic">"MediSynth transformed our approach to population health. We can now identify at-risk patients earlier and intervene more effectively, resulting in better outcomes and significant cost savings." — Dr. Michael Johnson, Chief Medical Officer</p>
                        </div>
                    </div>
                    
                    <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 mb-6">
                        <h4 class="text-xl font-bold mb-3 text-teal-700">Clinical Research</h4>
                        <p class="text-gray-700 mb-4">A research institution leveraged MediSynth to aggregate and analyze data from multiple clinical trials, electronic health records, and patient-reported outcomes. This comprehensive approach accelerated their research timeline by 40% and enabled the discovery of previously unidentified correlations between treatment protocols and patient outcomes.</p>
                        <div class="bg-teal-50 p-4 rounded-lg">
                            <p class="text-sm text-teal-800 italic">"The data integration and analytics capabilities of MediSynth have revolutionized our research process. We're making discoveries that simply wouldn't have been possible with our previous siloed approach to data." — Dr. Emily Chen, Research Director</p>
                        </div>
                    </div>
                    
                    <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                        <h4 class="text-xl font-bold mb-3 text-teal-700">Operational Optimization</h4>
                        <p class="text-gray-700 mb-4">A regional hospital network implemented MediSynth to analyze patient flow, resource utilization, and staffing patterns across their facilities. The insights generated led to a redesign of their emergency department workflows, resulting in a 35% reduction in wait times and a 20% improvement in resource utilization.</p>
                        <div class="bg-teal-50 p-4 rounded-lg">
                            <p class="text-sm text-teal-800 italic">"MediSynth helped us identify inefficiencies we didn't even know existed. The visualization tools made it easy to communicate these insights to our staff, driving buy-in for the changes we needed to make." — Sarah Williams, Operations Director</p>
                        </div>
                    </div>
                </div>
                
                <div class="bg-teal-700 text-white p-8 rounded-xl shadow-lg mb-16">
                    <h3 class="text-3xl font-bold mb-6 text-center">Implementation Process</h3>
                    <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                        <div class="bg-white text-teal-800 p-4 rounded-lg text-center shadow-md hover:shadow-xl transition-shadow duration-300">
                            <div class="bg-teal-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                                <span class="font-bold text-xl">1</span>
                            </div>
                            <h4 class="font-bold text-xl mb-2">Assessment</h4>
                            <p class="text-sm">We evaluate your current data ecosystem and identify integration opportunities</p>
                        </div>
                        <div class="bg-white text-teal-800 p-4 rounded-lg text-center shadow-md hover:shadow-xl transition-shadow duration-300">
                            <div class="bg-teal-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                                <span class="font-bold text-xl">2</span>
                            </div>
                            <h4 class="font-bold text-xl mb-2">Configuration</h4>
                            <p class="text-sm">Our team configures MediSynth to connect with your existing systems</p>
                        </div>
                        <div class="bg-white text-teal-800 p-4 rounded-lg text-center shadow-md hover:shadow-xl transition-shadow duration-300">
                            <div class="bg-teal-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                                <span class="font-bold text-xl">3</span>
                            </div>
                            <h4 class="font-bold text-xl mb-2">Customization</h4>
                            <p class="text-sm">We develop custom dashboards and analytics tailored to your specific needs</p>
                        </div>
                        <div class="bg-white text-teal-800 p-4 rounded-lg text-center shadow-md hover:shadow-xl transition-shadow duration-300">
                            <div class="bg-teal-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                                <span class="font-bold text-xl">4</span>
                            </div>
                            <h4 class="font-bold text-xl mb-2">Training</h4>
                            <p class="text-sm">Comprehensive training ensures your team can maximize the platform's value</p>
                        </div>
                    </div>
                    <p class="text-center mb-6">Contact our implementation team to discuss how MediSynth can be tailored to your organization's specific needs and goals.</p>
                    <div class="flex flex-col md:flex-row justify-center gap-8 items-center">
                        <div class="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <span class="font-bold">medisynth@orynx.co.uk</span>
                        </div>
                        <div class="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            <span class="font-bold">(555) 345-6789</span>
                        </div>
                    </div>
                </div>
                
                <h3 class="text-3xl font-bold mb-8 text-center text-teal-800 border-b-2 border-teal-300 pb-3">Frequently Asked Questions</h3>
                <div class="space-y-6 mb-12">
                    <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                        <h4 class="text-xl font-bold mb-3 text-teal-700">Q: How does MediSynth handle data security and privacy?</h4>
                        <p class="text-gray-700">A: MediSynth is built with security and privacy at its core. We implement end-to-end encryption, role-based access controls, and comprehensive audit trails. Our platform is fully HIPAA-compliant and regularly undergoes security assessments to ensure the highest standards of data protection.</p>
                    </div>
                    
                    <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                        <h4 class="text-xl font-bold mb-3 text-teal-700">Q: Can MediSynth integrate with our existing systems?</h4>
                        <p class="text-gray-700">A: Yes, MediSynth is designed for seamless integration with all major electronic health record systems, laboratory information systems, medical devices, and other healthcare data sources. Our platform supports standard healthcare interoperability protocols including HL7, FHIR, and DICOM.</p>
                    </div>
                    
                    <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                        <h4 class="text-xl font-bold mb-3 text-teal-700">Q: How long does implementation typically take?</h4>
                        <p class="text-gray-700">A: Implementation timelines vary based on the complexity of your data environment and specific requirements. Basic implementations can be completed in 4-6 weeks, while more complex integrations may take 3-4 months. Our team works closely with you to establish a realistic timeline and ensure minimal disruption to your operations.</p>
                    </div>
                    
                    <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                        <h4 class="text-xl font-bold mb-3 text-teal-700">Q: Can we customize the analytics and dashboards?</h4>
                        <p class="text-gray-700">A: Absolutely. MediSynth offers extensive customization options for analytics and visualizations. Our implementation team works with you to develop dashboards tailored to your specific clinical and operational needs, and our platform includes tools that allow your team to create and modify visualizations as your requirements evolve.</p>
                    </div>
                    
                    <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                        <h4 class="text-xl font-bold mb-3 text-teal-700">Q: What kind of support does Orynx provide after implementation?</h4>
                        <p class="text-gray-700">A: We offer comprehensive post-implementation support including 24/7 technical assistance, regular system updates, ongoing training, and dedicated account management. Our customer success team proactively monitors your system's performance and works with you to ensure you're maximizing the value of your MediSynth implementation.</p>
                    </div>
                </div>
            </div>
        `,
        features: [
            {
                title: 'Data Integration',
                description: 'Seamlessly combines data from EHRs, medical devices, wearables, and other sources.'
            },
            {
                title: 'Advanced Analytics',
                description: 'Powerful analytical tools for identifying patterns and trends in healthcare data.'
            },
            {
                title: 'Visualization Tools',
                description: 'Intuitive dashboards and reports that make complex medical data accessible.'
            },
            {
                title: 'Secure Collaboration',
                description: 'HIPAA-compliant sharing capabilities for multidisciplinary teams.'
            }
        ]
    },
    {
        id: 6,
        category: 'Healthcare',
        title: 'ClinTrialMatch',
        description: 'An innovative solution that connects patients with appropriate clinical trials using AI-powered matching algorithms and comprehensive trial databases.',
        longDescription: `
            <div class="bg-gradient-to-b from-amber-50 to-white py-12 px-6 rounded-t-3xl -mt-8 mb-12 border-b-4 border-amber-500">
                <h2 class="text-4xl font-bold mb-4 text-center text-amber-800">ClinTrialMatch: Connecting Patients to Life-Changing Research</h2>
                <h3 class="text-2xl font-semibold mb-8 text-center text-amber-600">Revolutionizing Clinical Trial Recruitment with AI-Powered Precision</h3>
                <div class="max-w-3xl mx-auto">
                    <p class="text-lg leading-relaxed mb-6">ClinTrialMatch is an innovative solution that connects patients with appropriate clinical trials using AI-powered matching algorithms and comprehensive trial databases. Our platform bridges the gap between groundbreaking medical research and the patients who can benefit from it, accelerating scientific discovery while providing hope to those seeking new treatment options.</p>
                </div>
            </div>
            
            <div class="max-w-5xl mx-auto px-4">
                <div class="bg-amber-600 text-white p-8 rounded-xl shadow-lg mb-16">
                    <h3 class="text-2xl font-bold mb-4">The Clinical Trial Challenge</h3>
                    <p class="text-lg leading-relaxed">Clinical trials are essential for advancing medical knowledge and developing new treatments, but they face a persistent challenge: finding the right participants. Over 80% of clinical trials fail to meet enrollment targets on time, delaying critical research and increasing costs. Meanwhile, many patients who could benefit from innovative treatments are unaware of relevant trials or face barriers to participation. ClinTrialMatch solves this problem by creating intelligent connections between patients and trials, benefiting all stakeholders in the healthcare ecosystem.</p>
                </div>
                
                <h3 class="text-3xl font-bold mb-8 text-center text-amber-800 border-b-2 border-amber-300 pb-3">Core Capabilities</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border-l-4 border-amber-500">
                        <h4 class="text-xl font-bold mb-3 text-amber-700 flex items-center">
                            <span class="text-3xl mr-3">🧠</span> Intelligent Matching
                        </h4>
                        <p class="text-gray-700">Our sophisticated AI algorithms match patient profiles with suitable clinical trials based on multiple criteria including medical condition, genetic factors, treatment history, location, and personal preferences. This precision matching dramatically increases the likelihood of finding relevant trials for each patient.</p>
                    </div>
                    
                    <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border-l-4 border-blue-500">
                        <h4 class="text-xl font-bold mb-3 text-blue-700 flex items-center">
                            <span class="text-3xl mr-3">🌐</span> Comprehensive Trial Database
                        </h4>
                        <p class="text-gray-700">Access up-to-date information on thousands of clinical trials worldwide. Our database is continuously updated with information from multiple sources including ClinicalTrials.gov, international registries, academic institutions, and pharmaceutical companies, ensuring comprehensive coverage of available research opportunities.</p>
                    </div>
                    
                    <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border-l-4 border-green-500">
                        <h4 class="text-xl font-bold mb-3 text-green-700 flex items-center">
                            <span class="text-3xl mr-3">👤</span> Patient-friendly Interface
                        </h4>
                        <p class="text-gray-700">Our easy-to-use platform simplifies the trial search and application process. Patients can create profiles, review matched trials in plain language, ask questions through our virtual assistant, and initiate the enrollment process—all through an intuitive interface designed with patient needs in mind.</p>
                    </div>
                    
                    <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border-l-4 border-purple-500">
                        <h4 class="text-xl font-bold mb-3 text-purple-700 flex items-center">
                            <span class="text-3xl mr-3">⚕️</span> Provider Integration
                        </h4>
                        <p class="text-gray-700">We offer specialized tools for healthcare providers to identify trial opportunities for their patients. Our platform integrates with electronic health record systems, allowing physicians to seamlessly incorporate clinical trial options into their treatment discussions and care plans.</p>
                    </div>
                </div>
                
                <div class="bg-gradient-to-r from-amber-100 to-orange-100 p-8 rounded-xl mb-16">
                    <h3 class="text-3xl font-bold mb-8 text-center text-amber-800">Who Benefits</h3>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                        <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div class="text-center mb-4">
                                <span class="text-5xl">👨‍👩‍👧‍👦</span>
                            </div>
                            <h4 class="text-xl font-bold mb-3 text-amber-700 text-center">Patients & Families</h4>
                            <ul class="list-disc pl-5 text-gray-700 space-y-2">
                                <li>Access to cutting-edge treatments not yet widely available</li>
                                <li>Personalized matching based on individual health profiles</li>
                                <li>Clear information about trial requirements and processes</li>
                                <li>Support throughout the application and participation journey</li>
                            </ul>
                        </div>
                        
                        <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div class="text-center mb-4">
                                <span class="text-5xl">👩‍⚕️</span>
                            </div>
                            <h4 class="text-xl font-bold mb-3 text-amber-700 text-center">Healthcare Providers</h4>
                            <ul class="list-disc pl-5 text-gray-700 space-y-2">
                                <li>Expanded treatment options for patients</li>
                                <li>Seamless integration with existing clinical workflows</li>
                                <li>Reduced administrative burden in trial referrals</li>
                                <li>Access to trial outcomes and emerging research</li>
                            </ul>
                        </div>
                        
                        <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div class="text-center mb-4">
                                <span class="text-5xl">🔬</span>
                            </div>
                            <h4 class="text-xl font-bold mb-3 text-amber-700 text-center">Research Organizations</h4>
                            <ul class="list-disc pl-5 text-gray-700 space-y-2">
                                <li>Accelerated recruitment timelines</li>
                                <li>More diverse and representative participant pools</li>
                                <li>Reduced recruitment costs</li>
                                <li>Higher retention rates through better initial matching</li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                <h3 class="text-3xl font-bold mb-8 text-center text-amber-800 border-b-2 border-amber-300 pb-3">Success Stories</h3>
                <div class="mb-16">
                    <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 mb-6">
                        <div class="flex flex-col md:flex-row gap-6">
                            <div class="md:w-2/3">
                                <h4 class="text-xl font-bold mb-3 text-amber-700">Accelerating Cancer Research</h4>
                                <p class="text-gray-700 mb-4">A leading oncology research network implemented ClinTrialMatch across 12 cancer centers, resulting in a 68% increase in trial enrollment rates and a 42% reduction in recruitment timelines. The platform's ability to identify eligible patients based on specific genetic markers was particularly valuable for precision medicine trials targeting rare mutations.</p>
                                <div class="bg-amber-50 p-4 rounded-lg">
                                    <p class="text-sm text-amber-800 italic">"ClinTrialMatch transformed our approach to trial recruitment. We're now able to find the right patients for highly specialized trials in a fraction of the time it used to take, accelerating our research and bringing new cancer treatments to patients faster." — Dr. Rebecca Martinez, Clinical Research Director</p>
                                </div>
                            </div>
                            <div class="md:w-1/3 flex items-center justify-center">
                                <div class="bg-amber-100 rounded-full p-8">
                                    <span class="text-7xl">📈</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 mb-6">
                        <div class="flex flex-col md:flex-row gap-6">
                            <div class="md:w-1/3 flex items-center justify-center">
                                <div class="bg-blue-100 rounded-full p-8">
                                    <span class="text-7xl">🌍</span>
                                </div>
                            </div>
                            <div class="md:w-2/3">
                                <h4 class="text-xl font-bold mb-3 text-amber-700">Expanding Access in Underserved Communities</h4>
                                <p class="text-gray-700 mb-4">A community health network serving rural and minority populations used ClinTrialMatch to increase clinical trial participation among traditionally underrepresented groups. By integrating the platform into their primary care practices and providing multilingual support, they achieved a 215% increase in trial participation among their patients within the first year.</p>
                                <div class="bg-amber-50 p-4 rounded-lg">
                                    <p class="text-sm text-amber-800 italic">"Our patients now have access to cutting-edge treatments that were previously out of reach. ClinTrialMatch has been instrumental in democratizing access to clinical trials and ensuring that medical advances benefit all communities." — Maria Gonzalez, Community Health Director</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                        <div class="flex flex-col md:flex-row gap-6">
                            <div class="md:w-2/3">
                                <h4 class="text-xl font-bold mb-3 text-amber-700">Patient Perspective: Finding Hope Through Innovation</h4>
                                <p class="text-gray-700 mb-4">After exhausting standard treatment options for his rare autoimmune condition, James Thompson used ClinTrialMatch to identify a phase II trial testing a novel biologic therapy. Within three months of enrolling in the trial, his symptoms showed significant improvement. Two years later, the treatment he accessed through the trial received FDA approval and is now helping thousands of patients worldwide.</p>
                                <div class="bg-amber-50 p-4 rounded-lg">
                                    <p class="text-sm text-amber-800 italic">"ClinTrialMatch didn't just find me a clinical trial—it found me hope when I thought I had run out of options. The platform made it easy to understand the trial requirements and connected me directly with the research team. I'm grateful every day for the technology that led me to this life-changing treatment." — James Thompson, Patient</p>
                                </div>
                            </div>
                            <div class="md:w-1/3 flex items-center justify-center">
                                <div class="bg-green-100 rounded-full p-8">
                                    <span class="text-7xl">💪</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="bg-amber-700 text-white p-8 rounded-xl shadow-lg mb-16">
                    <h3 class="text-3xl font-bold mb-6 text-center">How It Works</h3>
                    <div class="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
                        <div class="bg-white text-amber-800 p-4 rounded-lg text-center shadow-md hover:shadow-xl transition-shadow duration-300">
                            <div class="bg-amber-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                                <span class="font-bold text-xl">1</span>
                            </div>
                            <h4 class="font-bold text-xl mb-2">Profile Creation</h4>
                            <p class="text-sm">Patients or providers create detailed health profiles</p>
                        </div>
                        <div class="bg-white text-amber-800 p-4 rounded-lg text-center shadow-md hover:shadow-xl transition-shadow duration-300">
                            <div class="bg-amber-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                                <span class="font-bold text-xl">2</span>
                            </div>
                            <h4 class="font-bold text-xl mb-2">AI Matching</h4>
                            <p class="text-sm">Our algorithms identify suitable trials based on multiple criteria</p>
                        </div>
                        <div class="bg-white text-amber-800 p-4 rounded-lg text-center shadow-md hover:shadow-xl transition-shadow duration-300">
                            <div class="bg-amber-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                                <span class="font-bold text-xl">3</span>
                            </div>
                            <h4 class="font-bold text-xl mb-2">Review Options</h4>
                            <p class="text-sm">Patients and providers review matched trials with clear information</p>
                        </div>
                        <div class="bg-white text-amber-800 p-4 rounded-lg text-center shadow-md hover:shadow-xl transition-shadow duration-300">
                            <div class="bg-amber-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                                <span class="font-bold text-xl">4</span>
                            </div>
                            <h4 class="font-bold text-xl mb-2">Connect</h4>
                            <p class="text-sm">Direct connection with research teams for interested participants</p>
                        </div>
                        <div class="bg-white text-amber-800 p-4 rounded-lg text-center shadow-md hover:shadow-xl transition-shadow duration-300">
                            <div class="bg-amber-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                                <span class="font-bold text-xl">5</span>
                            </div>
                            <h4 class="font-bold text-xl mb-2">Ongoing Support</h4>
                            <p class="text-sm">Guidance throughout the enrollment and participation process</p>
                        </div>
                    </div>
                    <p class="text-center mb-6">Contact our team to learn how ClinTrialMatch can help connect your patients with groundbreaking clinical research or accelerate recruitment for your trials.</p>
                    <div class="flex flex-col md:flex-row justify-center gap-8 items-center">
                        <div class="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <span class="font-bold">clintrials@orynx.co.uk</span>
                        </div>
                        <div class="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            <span class="font-bold">(555) 456-7890</span>
                        </div>
                    </div>
                </div>
                
                <h3 class="text-3xl font-bold mb-8 text-center text-amber-800 border-b-2 border-amber-300 pb-3">Frequently Asked Questions</h3>
                <div class="space-y-6 mb-12">
                    <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                        <h4 class="text-xl font-bold mb-3 text-amber-700">Q: Is there a cost for patients to use ClinTrialMatch?</h4>
                        <p class="text-gray-700">A: No, ClinTrialMatch is completely free for patients. Our platform is funded through partnerships with research organizations, healthcare systems, and pharmaceutical companies who benefit from more efficient trial recruitment.</p>
                    </div>
                    
                    <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                        <h4 class="text-xl font-bold mb-3 text-amber-700">Q: How does ClinTrialMatch protect patient privacy?</h4>
                        <p class="text-gray-700">A: Patient privacy is our top priority. We employ bank-level encryption, strict access controls, and HIPAA-compliant data handling practices. Patients control their information and must provide explicit consent before their details are shared with any research team.</p>
                    </div>
                    
                    <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                        <h4 class="text-xl font-bold mb-3 text-amber-700">Q: Can healthcare providers integrate ClinTrialMatch with their existing systems?</h4>
                        <p class="text-gray-700">A: Yes, we offer integration options for all major electronic health record systems. Our API allows for seamless incorporation of trial matching into clinical workflows, and our implementation team provides comprehensive support throughout the integration process.</p>
                    </div>
                    
                    <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                        <h4 class="text-xl font-bold mb-3 text-amber-700">Q: How accurate is the matching algorithm?</h4>
                        <p class="text-gray-700">A: Our AI-powered matching algorithm has demonstrated 94% accuracy in identifying eligible patients for clinical trials, significantly outperforming traditional recruitment methods. The system continuously learns and improves based on outcomes and feedback, ensuring ever-increasing precision in matching patients to appropriate trials.</p>
                    </div>
                    
                    <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                        <h4 class="text-xl font-bold mb-3 text-amber-700">Q: Does ClinTrialMatch support international trials?</h4>
                        <p class="text-gray-700">A: Yes, our database includes clinical trials from around the world. We currently support matching in 27 countries across North America, Europe, Australia, and parts of Asia, with ongoing expansion to additional regions.</p>
                    </div>
                </div>
            </div>
        `,
        features: [
            {
                title: 'Intelligent Matching',
                description: 'AI algorithms that match patient profiles with suitable clinical trials based on multiple criteria.'
            },
            {
                title: 'Comprehensive Trial Database',
                description: 'Up-to-date information on thousands of clinical trials worldwide.'
            },
            {
                title: 'Patient-friendly Interface',
                description: 'Easy-to-use platform that simplifies the trial search and application process.'
            },
            {
                title: 'Provider Integration',
                description: 'Tools for healthcare providers to identify trial opportunities for their patients.'
            }
        ]
    }
]);

// Product mapping for URL parameters to product titles
const productMapping = {
    'orynx-ai': 'Orynx AI',
    'orynx-labs': 'Orynx Labs',
    'medisynth': 'MediSynth',
    'clintrialMatch': 'ClinTrialMatch'
};

// Filter products based on selected category and product
const filteredProducts = computed(() => {
    let filtered = products.value;
    
    // Filter by category if not "All"
    if (selectedCategory.value !== 'All') {
        filtered = filtered.filter(p => p.category === selectedCategory.value);
    }
    
    // Filter by selected product if applicable
    if (selectedProduct.value) {
        const productTitle = productMapping[selectedProduct.value];
        if (productTitle) {
            filtered = filtered.filter(p => p.title === productTitle);
        }
    }
    
    return filtered;
});
</script>

<template>
    <div class="container mx-auto px-4 pt-24 pb-16">
        <!-- Single Product Detail View -->
        <div v-if="selectedProduct && filteredProducts.length === 1 && filteredProducts[0].longDescription">
            <div class="bg-white rounded-xl shadow-lg overflow-hidden p-8">
                <!-- Render the HTML content safely -->
                <div v-html="filteredProducts[0].longDescription" class="prose prose-blue max-w-none"></div>
                
                <div class="mt-8">
                    <button @click="selectedProduct = null" class="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                        View All Products
                    </button>
                </div>
            </div>
        </div>
        
        <!-- Products List View -->
        <div v-else>
            <div class="text-center">
                <h1 class="text-4xl font-bold text-black">Our Healthcare AI Products</h1>
                <p class="mt-4 text-lg text-slate-500">Discover how we're revolutionizing healthcare through innovative AI and ML solutions</p>
            </div>

            <!-- Category Filter -->
            <div class="flex flex-wrap justify-center gap-4 mt-8">
                <button v-for="category in categories" :key="category"
                        :class="['px-4 py-2 rounded-full transition-all duration-300',
                                selectedCategory === category 
                                ? 'bg-blue-600 text-white' 
                                : 'bg-slate-100 hover:bg-slate-200 text-slate-700']"
                        @click="selectedCategory = category">
                    {{ category }}
                </button>
            </div>

            <!-- Products Grid -->
            <div class="mt-16 grid gap-8 md:grid-cols-2">
                <div v-for="product in filteredProducts"
                     :key="product.id"
                     class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <div class="p-6">
                        <span class="inline-block px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 mb-4">
                            {{ product.category }}
                        </span>
                        <h3 class="text-2xl font-bold text-slate-900">{{ product.title }}</h3>
                        <p class="mt-3 text-slate-500">{{ product.description }}</p>

                        <!-- Features Grid -->
                        <div class="mt-6 grid gap-4 sm:grid-cols-2">
                            <div v-for="(feature, index) in product.features" :key="index"
                                 class="p-4 rounded-lg bg-slate-50">
                                <h4 class="font-semibold text-slate-900">{{ feature.title }}</h4>
                                <p class="mt-2 text-sm text-slate-500">{{ feature.description }}</p>
                            </div>
                        </div>
                        
                        <!-- View Details Button (only for products with longDescription) -->
                        <div v-if="product.longDescription" class="mt-6">
                            <a :href="`/products?product=${Object.keys(productMapping).find(key => productMapping[key] === product.title)}`" 
                               class="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                                View Details
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.container {
    max-width: 1200px;
}
</style>
