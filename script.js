<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FitLife Studio | Premium Fitness Experience</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        /* CSS will be embedded here */
        :root {
            --primary: #ff7e5f;
            --secondary: #feb47b;
            --accent: #6a11cb;
            --dark: #2c3e50;
            --light: #f8f9fa;
            --gradient-primary: linear-gradient(135deg, var(--primary), var(--secondary));
            --gradient-secondary: linear-gradient(135deg, var(--accent), #2575fc);
            --gradient-dark: linear-gradient(135deg, #2c3e50, #4a6491);
            --shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
            --transition: all 0.4s ease;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Poppins', sans-serif;
            color: var(--dark);
            line-height: 1.6;
            overflow-x: hidden;
        }

        .container {
            width: 90%;
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 15px;
        }

        .btn {
            display: inline-block;
            padding: 12px 30px;
            border-radius: 50px;
            text-decoration: none;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 1px;
            transition: var(--transition);
            cursor: pointer;
            border: none;
            font-size: 14px;
        }

        .btn-primary {
            background: var(--gradient-primary);
            color: white;
            box-shadow: 0 5px 15px rgba(255, 126, 95, 0.4);
        }

        .btn-primary:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 20px rgba(255, 126, 95, 0.6);
        }

        .btn-secondary {
            background: var(--gradient-secondary);
            color: white;
            box-shadow: 0 5px 15px rgba(106, 17, 203, 0.4);
        }

        .btn-secondary:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 20px rgba(106, 17, 203, 0.6);
        }

        .btn-outline {
            background: transparent;
            border: 2px solid var(--primary);
            color: var(--primary);
        }

        .btn-outline:hover {
            background: var(--gradient-primary);
            color: white;
        }

        .section-title {
            font-size: 2.5rem;
            margin-bottom: 15px;
            text-align: center;
            position: relative;
            padding-bottom: 15px;
        }

        .section-title::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 80px;
            height: 4px;
            background: var(--gradient-primary);
            border-radius: 2px;
        }

        .section-subtitle {
            font-size: 1.1rem;
            color: #777;
            text-align: center;
            margin-bottom: 60px;
            max-width: 700px;
            margin-left: auto;
            margin-right: auto;
        }

        /* Header Styles */
        .header {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            padding: 20px 0;
            z-index: 1000;
            transition: var(--transition);
            background: rgba(255, 255, 255, 0.95);
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }

        .header.scrolled {
            padding: 15px 0;
            background: rgba(255, 255, 255, 0.98);
            backdrop-filter: blur(10px);
        }

        .logo {
            display: flex;
            align-items: center;
            font-size: 1.8rem;
            font-weight: 700;
            color: var(--dark);
            text-decoration: none;
        }

        .logo-icon {
            margin-right: 10px;
            color: var(--primary);
        }

        .nav {
            display: flex;
            align-items: center;
        }

        .nav ul {
            display: flex;
            list-style: none;
            margin-right: 30px;
        }

        .nav ul li a {
            text-decoration: none;
            color: var(--dark);
            font-weight: 500;
            padding: 10px 15px;
            margin: 0 5px;
            border-radius: 5px;
            transition: var(--transition);
        }

        .nav ul li a:hover, .nav ul li a.active {
            color: var(--primary);
        }

        .mobile-menu-btn {
            display: none;
            font-size: 1.5rem;
            cursor: pointer;
        }

        /* Hero Section */
        .hero {
            position: relative;
            padding: 180px 0 100px;
            background: var(--gradient-secondary);
            color: white;
            overflow: hidden;
        }

        .hero::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200') no-repeat center center/cover;
            opacity: 0.1;
        }

        .hero-content {
            position: relative;
            z-index: 1;
            max-width: 650px;
        }

        .hero-title {
            font-size: 3.5rem;
            line-height: 1.2;
            margin-bottom: 20px;
            font-weight: 800;
        }

        .hero-subtitle {
            font-size: 1.2rem;
            margin-bottom: 40px;
            opacity: 0.9;
        }

        .hero-buttons .btn {
            margin-right: 15px;
            margin-bottom: 15px;
        }

        .hero-shape {
            position: absolute;
            bottom: -100px;
            right: -100px;
            width: 500px;
            height: 500px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.05);
        }

        /* Classes Section */
        .classes {
            padding: 100px 0;
            background: var(--light);
        }

        .classes-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 30px;
        }

        .class-card {
            background: white;
            border-radius: 15px;
            padding: 40px 25px;
            text-align: center;
            box-shadow: var(--shadow);
            transition: var(--transition);
        }

        .class-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
        }

        .class-icon {
            width: 80px;
            height: 80px;
            background: var(--gradient-primary);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 25px;
            font-size: 2rem;
            color: white;
        }

        .class-card h3 {
            font-size: 1.4rem;
            margin-bottom: 15px;
        }

        /* Trainers Section */
        .trainers {
            padding: 100px 0;
            background: white;
        }

        .trainers-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 30px;
        }

        .trainer-card {
            background: white;
            border-radius: 15px;
            overflow: hidden;
            box-shadow: var(--shadow);
            transition: var(--transition);
        }

        .trainer-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
        }

        .trainer-image {
            height: 350px;
            overflow: hidden;
        }

        .trainer-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.5s ease;
        }

        .trainer-card:hover .trainer-image img {
            transform: scale(1.1);
        }

        .trainer-info {
            padding: 25px;
            text-align: center;
        }

        .trainer-info h3 {
            font-size: 1.5rem;
            margin-bottom: 5px;
        }

        .trainer-info p {
            color: var(--primary);
            margin-bottom: 15px;
        }

        .social-icons a {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 36px;
            height: 36px;
            background: #f5f5f5;
            border-radius: 50%;
            margin: 0 5px;
            color: var(--dark);
            transition: var(--transition);
        }

        .social-icons a:hover {
            background: var(--gradient-primary);
            color: white;
        }

        /* Membership Section */
        .membership {
            padding: 100px 0;
            background: var(--light);
        }

        .pricing-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 30px;
        }

        .pricing-card {
            background: white;
            border-radius: 15px;
            padding: 40px 30px;
            text-align: center;
            box-shadow: var(--shadow);
            transition: var(--transition);
            position: relative;
        }

        .pricing-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
        }

        .pricing-card.featured {
            border: 3px solid var(--primary);
            transform: scale(1.05);
            z-index: 1;
        }

        .pricing-card.featured:hover {
            transform: scale(1.08);
        }

        .pricing-header {
            margin-bottom: 30px;
        }

        .pricing-header h3 {
            font-size: 1.6rem;
            margin-bottom: 15px;
        }

        .price {
            font-size: 3rem;
            font-weight: 700;
            color: var(--primary);
            margin-bottom: 10px;
        }

        .price span {
            font-size: 1rem;
            color: #777;
            font-weight: 400;
        }

        .popular {
            position: absolute;
            top: -15px;
            right: 20px;
            background: var(--gradient-primary);
            color: white;
            padding: 5px 15px;
            border-radius: 20px;
            font-size: 0.8rem;
            font-weight: 600;
        }

        .features {
            list-style: none;
            margin-bottom: 30px;
            text-align: left;
        }

        .features li {
            padding: 10px 0;
            border-bottom: 1px solid #eee;
            display: flex;
            align-items: center;
        }

        .features li:last-child {
            border-bottom: none;
        }

        .features li i {
            margin-right: 10px;
            width: 24px;
            height: 24px;
            background: #f5f5f5;
            border-radius: 50%;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            font-size: 0.8rem;
        }

        .features li i.fa-check {
            color: #4CAF50;
        }

        .features li i.fa-times {
            color: #F44336;
        }

        /* Testimonials Section */
        .testimonials {
            padding: 100px 0;
            background: white;
            position: relative;
        }

        .testimonial-slider {
            max-width: 800px;
            margin: 0 auto;
            position: relative;
        }

        .testimonial {
            display: none;
            padding: 40px;
            background: white;
            border-radius: 15px;
            box-shadow: var(--shadow);
            text-align: center;
        }

        .testimonial.active {
            display: block;
            animation: fadeIn 0.8s ease;
        }

        .quote {
            position: relative;
            padding: 0 40px;
        }

        .quote i {
            position: absolute;
            top: -20px;
            left: 0;
            font-size: 4rem;
            color: rgba(255, 126, 95, 0.1);
            z-index: 0;
        }

        .quote p {
            font-size: 1.2rem;
            font-style: italic;
            margin-bottom: 30px;
            position: relative;
            z-index: 1;
        }

        .client {
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .client img {
            width: 70px;
            height: 70px;
            border-radius: 50%;
            object-fit: cover;
            margin-right: 20px;
            border: 3px solid var(--primary);
        }

        .client h4 {
            font-size: 1.2rem;
            margin-bottom: 5px;
        }

        .testimonial-nav {
            position: absolute;
            top: 50%;
            left: 0;
            width: 100%;
            transform: translateY(-50%);
            display: flex;
            justify-content: space-between;
            padding: 0 20px;
            pointer-events: none;
        }

        .testimonial-nav button {
            pointer-events: all;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background: white;
            border: none;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: var(--transition);
            color: var(--dark);
        }

        .testimonial-nav button:hover {
            background: var(--gradient-primary);
            color: white;
        }

        /* Contact Section */
        .contact {
            padding: 100px 0;
            background: var(--light);
        }

        .contact-content {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 50px;
        }

        .contact-info {
            padding: 30px;
        }

        .info-item {
            display: flex;
            margin-bottom: 30px;
        }

        .info-icon {
            width: 60px;
            height: 60px;
            background: var(--gradient-primary);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5rem;
            color: white;
            margin-right: 20px;
            flex-shrink: 0;
        }

        .info-item h3 {
            font-size: 1.2rem;
            margin-bottom: 5px;
        }

        .contact-form {
            background: white;
            padding: 40px;
            border-radius: 15px;
            box-shadow: var(--shadow);
        }

        .form-group {
            margin-bottom: 20px;
        }

        .form-group input,
        .form-group textarea {
            width: 100%;
            padding: 15px;
            border: 1px solid #eee;
            border-radius: 8px;
            font-family: inherit;
            font-size: 1rem;
            transition: var(--transition);
        }

        .form-group input:focus,
        .form-group textarea:focus {
            border-color: var(--primary);
            outline: none;
            box-shadow: 0 0 0 3px rgba(255, 126, 95, 0.2);
        }

        .form-group textarea {
            resize: vertical;
            min-height: 120px;
        }

        /* Footer */
        .footer {
            background: var(--dark);
            color: white;
            padding: 80px 0 0;
        }

        .footer-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 30px;
            margin-bottom: 60px;
        }

        .footer-col h3 {
            font-size: 1.4rem;
            margin-bottom: 25px;
            position: relative;
            padding-bottom: 10px;
        }

        .footer-col h3::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 50px;
            height: 3px;
            background: var(--gradient-primary);
            border-radius: 2px;
        }

        .footer-col p {
            margin-bottom: 20px;
            opacity: 0.8;
        }

        .footer-col ul {
            list-style: none;
        }

        .footer-col ul li {
            margin-bottom: 12px;
        }

        .footer-col ul li a {
            color: #ddd;
            text-decoration: none;
            transition: var(--transition);
            opacity: 0.8;
        }

        .footer-col ul li a:hover {
            color: var(--primary);
            opacity: 1;
            padding-left: 5px;
        }

        .social-links a {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 40px;
            height: 40px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 50%;
            margin-right: 10px;
            color: white;
            font-size: 1.1rem;
            transition: var(--transition);
        }

        .social-links a:hover {
            background: var(--gradient-primary);
            transform: translateY(-5px);
        }

        .newsletter-form {
            display: flex;
            margin-top: 20px;
        }

        .newsletter-form input {
            flex: 1;
            padding: 12px 15px;
            border: none;
            border-radius: 50px 0 0 50px;
            outline: none;
        }

        .newsletter-form button {
            width: 50px;
            border: none;
            background: var(--gradient-primary);
            color: white;
            border-radius: 0 50px 50px 0;
            cursor: pointer;
            transition: var(--transition);
        }

        .newsletter-form button:hover {
            background: var(--accent);
        }

        .footer-bottom {
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            padding: 20px 0;
            text-align: center;
            font-size: 0.9rem;
            opacity: 0.7;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
        }

        .footer-links a {
            color: white;
            margin-left: 20px;
            text-decoration: none;
            transition: var(--transition);
        }

        .footer-links a:hover {
            color: var(--primary);
        }

        /* Animations */
        .animate-text {
            opacity: 0;
            transform: translateY(20px);
            animation: fadeUp 0.8s ease forwards;
        }

        .animate-btn {
            opacity: 0;
            transform: translateY(20px);
            animation: fadeUp 0.8s ease 0.3s forwards;
        }

        .animate-card {
            opacity: 0;
            transform: translateY(30px);
            animation: fadeUp 0.8s ease forwards;
        }

        @keyframes fadeUp {
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @keyframes fadeIn {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }

        /* Responsive Styles */
        @media (max-width: 992px) {
            .hero-title {
                font-size: 3rem;
            }
            
            .section-title {
                font-size: 2.2rem;
            }
        }

        @media (max-width: 768px) {
            .nav {
                position: fixed;
                top: 80px;
                right: -100%;
                width: 80%;
                height: calc(100vh - 80px);
                background: white;
                flex-direction: column;
                align-items: center;
                padding: 40px 0;
                box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
                transition: var(--transition);
            }
            
            .nav.active {
                right: 0;
            }
            
            .nav ul {
                flex-direction: column;
                margin-right: 0;
                margin-bottom: 30px;
            }
            
            .nav ul li {
                margin: 10px 0;
            }
            
            .mobile-menu-btn {
                display: block;
            }
            
            .hero-title {
                font-size: 2.5rem;
            }
            
            .hero-subtitle {
                font-size: 1.1rem;
            }
            
            .pricing-card.featured {
                transform: scale(1);
            }
            
            .testimonial-nav {
                position: relative;
                top: auto;
                transform: none;
                margin-top: 30px;
                justify-content: center;
            }
            
            .testimonial-nav button {
                margin: 0 10px;
            }
            
            .footer-bottom {
                flex-direction: column;
                gap: 15px;
            }
            
            .footer-links a {
                margin: 0 10px;
            }
        }

        @media (max-width: 576px) {
            .hero {
                padding: 150px 0 80px;
            }
            
            .hero-title {
                font-size: 2rem;
            }
            
            .section-title {
                font-size: 1.8rem;
            }
            
            .hero-buttons .btn {
                width: 100%;
                margin-right: 0;
            }
        }
    </style>
</head>
<body>
    <!-- Header & Navigation -->
    <header class="header">
        <div class="container">
            <div class="logo">
                <span class="logo-icon"><i class="fas fa-dumbbell"></i></span>
                <span>FITLIFE</span>
            </div>
            <nav class="nav">
                <ul>
                    <li><a href="#" class="active">Home</a></li>
                    <li><a href="#classes">Classes</a></li>
                    <li><a href="#trainers">Trainers</a></li>
                    <li><a href="#membership">Membership</a></li>
                    <li><a href="#testimonials">Testimonials</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                <a href="#membership" class="btn btn-primary">Join Now</a>
            </nav>
            <div class="mobile-menu-btn">
                <i class="fas fa-bars"></i>
            </div>
        </div>
    </header>

    <!-- Hero Section -->
    <section class="hero">
        <div class="container">
            <div class="hero-content">
                <h1 class="hero-title animate-text">Transform Your Body, Transform Your Life</h1>
                <p class="hero-subtitle animate-text">Premium fitness studio offering personalized training, group classes, and nutritional guidance</p>
                <div class="hero-buttons">
                    <a href="#classes" class="btn btn-primary animate-btn">Explore Classes</a>
                    <a href="#membership" class="btn btn-secondary animate-btn">Get Started</a>
                </div>
            </div>
        </div>
        <div class="hero-shape"></div>
    </section>

    <!-- Classes Section -->
    <section id="classes" class="classes">
        <div class="container">
            <h2 class="section-title">Our Classes</h2>
            <p class="section-subtitle">Choose from our diverse range of fitness programs</p>
            
            <div class="classes-grid">
                <div class="class-card animate-card">
                    <div class="class-icon">
                        <i class="fas fa-running"></i>
                    </div>
                    <h3>HIIT Training</h3>
                    <p>High-intensity interval training to maximize fat burning and endurance.</p>
                </div>
                
                <div class="class-card animate-card">
                    <div class="class-icon">
                        <i class="fas fa-dumbbell"></i>
                    </div>
                    <h3>Strength & Conditioning</h3>
                    <p>Build muscle and increase strength with our expert-led sessions.</p>
                </div>
                
                <div class="class-card animate-card">
                    <div class="class-icon">
                        <i class="fas fa-spa"></i>
                    </div>
                    <h3>Yoga & Flexibility</h3>
                    <p>Improve flexibility, balance, and mental focus with our yoga classes.</p>
                </div>
                
                <div class="class-card animate-card">
                    <div class="class-icon">
                        <i class="fas fa-heartbeat"></i>
                    </div>
                    <h3>Cardio Blast</h3>
                    <p>Boost cardiovascular health with our energetic cardio sessions.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Trainers Section -->
    <section id="trainers" class="trainers">
        <div class="container">
            <h2 class="section-title">Meet Our Trainers</h2>
            <p class="section-subtitle">Certified professionals dedicated to your success</p>
            
            <div class="trainers-grid">
                <div class="trainer-card animate-card">
                    <div class="trainer-image">
                        <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=600" alt="Alex Morgan">
                    </div>
                    <div class="trainer-info">
                        <h3>Alex Morgan</h3>
                        <p>Strength & Conditioning Specialist</p>
                        <div class="social-icons">
                            <a href="#"><i class="fab fa-instagram"></i></a>
                            <a href="#"><i class="fab fa-facebook"></i></a>
                            <a href="#"><i class="fab fa-twitter"></i></a>
                        </div>
                    </div>
                </div>
                
                <div class="trainer-card animate-card">
                    <div class="trainer-image">
                        <img src="https://images.unsplash.com/photo-1534367507877-0edd93bd013b?auto=format&fit=crop&w=600" alt="Sarah Johnson">
                    </div>
                    <div class="trainer-info">
                        <h3>Sarah Johnson</h3>
                        <p>Yoga & Flexibility Expert</p>
                        <div class="social-icons">
                            <a href="#"><i class="fab fa-instagram"></i></a>
                            <a href="#"><i class="fab fa-facebook"></i></a>
                            <a href="#"><i class="fab fa-twitter"></i></a>
                        </div>
                    </div>
                </div>
                
                <div class="trainer-card animate-card">
                    <div class="trainer-image">
                        <img src="https://images.unsplash.com/photo-1519505907962-0a6cb0167c73?auto=format&fit=crop&w=600" alt="Michael Chen">
                    </div>
                    <div class="trainer-info">
                        <h3>Michael Chen</h3>
                        <p>HIIT & Cardio Specialist</p>
                        <div class="social-icons">
                            <a href="#"><i class="fab fa-instagram"></i></a>
                            <a href="#"><i class="fab fa-facebook"></i></a>
                            <a href="#"><i class="fab fa-twitter"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Membership Section -->
    <section id="membership" class="membership">
        <div class="container">
            <h2 class="section-title">Membership Plans</h2>
            <p class="section-subtitle">Choose the plan that fits your fitness goals</p>
            
            <div class="pricing-grid">
                <div class="pricing-card animate-card">
                    <div class="pricing-header">
                        <h3>Basic</h3>
                        <div class="price">$49<span>/month</span></div>
                    </div>
                    <ul class="features">
                        <li><i class="fas fa-check"></i> Access to gym facilities</li>
                        <li><i class="fas fa-check"></i> 2 Group classes per week</li>
                        <li><i class="fas fa-times"></i> Personal training sessions</li>
                        <li><i class="fas fa-times"></i> Nutritional guidance</li>
                    </ul>
                    <a href="#" class="btn btn-outline">Get Started</a>
                </div>
                
                <div class="pricing-card featured animate-card">
                    <div class="pricing-header">
                        <h3>Premium</h3>
                        <div class="price">$89<span>/month</span></div>
                        <div class="popular">Most Popular</div>
                    </div>
                    <ul class="features">
                        <li><i class="fas fa-check"></i> Unlimited gym access</li>
                        <li><i class="fas fa-check"></i> Unlimited group classes</li>
                        <li><i class="fas fa-check"></i> 4 Personal training sessions</li>
                        <li><i class="fas fa-check"></i> Nutritional guidance</li>
                    </ul>
                    <a href="#" class="btn btn-primary">Get Started</a>
                </div>
                
                <div class="pricing-card animate-card">
                    <div class="pricing-header">
                        <h3>Elite</h3>
                        <div class="price">$129<span>/month</span></div>
                    </div>
                    <ul class="features">
                        <li><i class="fas fa-check"></i> 24/7 Gym access</li>
                        <li><i class="fas fa-check"></i> Unlimited classes</li>
                        <li><i class="fas fa-check"></i> 8 Personal training sessions</li>
                        <li><i class="fas fa-check"></i> Custom meal plans</li>
                    </ul>
                    <a href="#" class="btn btn-outline">Get Started</a>
                </div>
            </div>
        </div>
    </section>

    <!-- Testimonials Section -->
    <section id="testimonials" class="testimonials">
        <div class="container">
            <h2 class="section-title">Success Stories</h2>
            <p class="section-subtitle">Hear from our members</p>
            
            <div class="testimonial-slider">
                <div class="testimonial active">
                    <div class="quote">
                        <i class="fas fa-quote-left"></i>
                        <p>FitLife transformed my fitness journey. I've lost 25 pounds in 3 months and feel stronger than ever!</p>
                        <div class="client">
                            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100" alt="Emily Rodriguez">
                            <div>
                                <h4>Emily Rodriguez</h4>
                                <p>Member for 1 year</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="testimonial">
                    <div class="quote">
                        <i class="fas fa-quote-left"></i>
                        <p>The trainers are exceptional. They pushed me beyond what I thought was possible and helped me achieve my goals.</p>
                        <div class="client">
                            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100" alt="James Wilson">
                            <div>
                                <h4>James Wilson</h4>
                                <p>Member for 8 months</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="testimonial">
                    <div class="quote">
                        <i class="fas fa-quote-left"></i>
                        <p>I've tried many gyms, but FitLife's community and variety of classes keep me motivated every day.</p>
                        <div class="client">
                            <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100" alt="Sophia Kim">
                            <div>
                                <h4>Sophia Kim</h4>
                                <p>Member for 2 years</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="testimonial-nav">
                    <button class="prev"><i class="fas fa-chevron-left"></i></button>
                    <button class="next"><i class="fas fa-chevron-right"></i></button>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="contact">
        <div class="container">
            <div class="contact-content">
                <div class="contact-info">
                    <h2 class="section-title">Get In Touch</h2>
                    <p class="section-subtitle">We'd love to hear from you</p>
                    
                    <div class="info-item">
                        <div class="info-icon">
                            <i class="fas fa-map-marker-alt"></i>
                        </div>
                        <div>
                            <h3>Location</h3>
                            <p>123 Fitness Street, Health City, HC 54321</p>
                        </div>
                    </div>
                    
                    <div class="info-item">
                        <div class="info-icon">
                            <i class="fas fa-phone-alt"></i>
                        </div>
                        <div>
                            <h3>Phone</h3>
                            <p>(555) 123-4567</p>
                        </div>
                    </div>
                    
                    <div class="info-item">
                        <div class="info-icon">
                            <i class="fas fa-envelope"></i>
                        </div>
                        <div>
                            <h3>Email</h3>
                            <p>info@fitlifestudio.com</p>
                        </div>
                    </div>
                    
                    <div class="info-item">
                        <div class="info-icon">
                            <i class="fas fa-clock"></i>
                        </div>
                        <div>
                            <h3>Hours</h3>
                            <p>Monday - Friday: 5am - 11pm</p>
                            <p>Saturday - Sunday: 7am - 9pm</p>
                        </div>
                    </div>
                </div>
                
                <div class="contact-form">
                    <form>
                        <div class="form-group">
                            <input type="text" placeholder="Your Name" required>
                        </div>
                        <div class="form-group">
                            <input type="email" placeholder="Your Email" required>
                        </div>
                        <div class="form-group">
                            <input type="text" placeholder="Subject">
                        </div>
                        <div class="form-group">
                            <textarea placeholder="Your Message" rows="5" required></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <div class="footer-grid">
                <div class="footer-col">
                    <div class="logo">
                        <span class="logo-icon"><i class="fas fa-dumbbell"></i></span>
                        <span>FITLIFE</span>
                    </div>
                    <p>Transforming lives through fitness, one workout at a time.</p>
                    <div class="social-links">
                        <a href="#"><i class="fab fa-facebook-f"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                        <a href="#"><i class="fab fa-youtube"></i></a>
                    </div>
                </div>
                
                <div class="footer-col">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#classes">Classes</a></li>
                        <li><a href="#trainers">Trainers</a></li>
                        <li><a href="#membership">Membership</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                
                <div class="footer-col">
                    <h3>Classes</h3>
                    <ul>
                        <li><a href="#">HIIT Training</a></li>
                        <li><a href="#">Strength & Conditioning</a></li>
                        <li><a href="#">Yoga & Flexibility</a></li>
                        <li><a href="#">Cardio Blast</a></li>
                        <li><a href="#">Pilates</a></li>
                    </ul>
                </div>
                
                <div class="footer-col">
                    <h3>Newsletter</h3>
                    <p>Subscribe to get special offers and fitness tips</p>
                    <form class="newsletter-form">
                        <input type="email" placeholder="Your Email" required>
                        <button type="submit"><i class="fas fa-paper-plane"></i></button>
                    </form>
                </div>
            </div>
            
            <div class="footer-bottom">
                <p>&copy; 2023 FitLife Studio. All rights reserved.</p>
                <div class="footer-links">
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms & Conditions</a>
                </div>
            </div>
        </div>
    </footer>

    <script>
        // JavaScript will be embedded here
        document.addEventListener('DOMContentLoaded', function() {
            // Mobile Menu Toggle
            const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
            const nav = document.querySelector('.nav');
            
            mobileMenuBtn.addEventListener('click', function() {
                nav.classList.toggle('active');
                this.querySelector('i').classList.toggle('fa-bars');
                this.querySelector('i').classList.toggle('fa-times');
            });
            
            // Header scroll effect
            const header = document.querySelector('.header');
            window.addEventListener('scroll', function() {
                if (window.scrollY > 100) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
            });
            
            // Testimonial slider
            const testimonials = document.querySelectorAll('.testimonial');
            const prevBtn = document.querySelector('.testimonial-nav .prev');
            const nextBtn = document.querySelector('.testimonial-nav .next');
            let currentTestimonial = 0;
            
            function showTestimonial(index) {
                testimonials.forEach(testimonial => testimonial.classList.remove('active'));
                testimonials[index].classList.add('active');
                currentTestimonial = index;
            }
            
            prevBtn.addEventListener('click', function() {
                let prevIndex = currentTestimonial - 1;
                if (prevIndex < 0) prevIndex = testimonials.length - 1;
                showTestimonial(prevIndex);
            });
            
            nextBtn.addEventListener('click', function() {
                let nextIndex = currentTestimonial + 1;
                if (nextIndex >= testimonials.length) nextIndex = 0;
                showTestimonial(nextIndex);
            });
            
            // Auto rotate testimonials
            setInterval(() => {
                let nextIndex = currentTestimonial + 1;
                if (nextIndex >= testimonials.length) nextIndex = 0;
                showTestimonial(nextIndex);
            }, 5000);
            
            // Smooth scrolling for anchor links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    const target = document.querySelector(this.getAttribute('href'));
                    
                    if (target) {
                        window.scrollTo({
                            top: target.offsetTop - 80,
                            behavior: 'smooth'
                        });
                        
                        // Close mobile menu if open
                        if (nav.classList.contains('active')) {
                            nav.classList.remove('active');
                            mobileMenuBtn.querySelector('i').classList.remove('fa-times');
                            mobileMenuBtn.querySelector('i').classList.add('fa-bars');
                        }
                    }
                });
            });
            
            // Animate elements on scroll
            const animateOnScroll = function() {
                const elements = document.querySelectorAll('.animate-card');
                
                elements.forEach(element => {
                    const elementPosition = element.getBoundingClientRect().top;
                    const screenPosition = window.innerHeight / 1.3;
                    
                    if (elementPosition < screenPosition) {
                        element.style.animation = 'fadeUp 0.8s ease forwards';
                    }
                });
            };
            
            // Initial check on load
            animateOnScroll();
            
            // Check on scroll
            window.addEventListener('scroll', animateOnScroll);
        });
    </script>
</body>
</html>