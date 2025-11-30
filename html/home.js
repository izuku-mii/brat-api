<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta property="og:image" content="https://files.catbox.moe/mor9tq.png">
    <title>IZUMI - Brat</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
            background: #000000;
            color: #fff;
            overflow-x: hidden;
        }

        .gradient-bg {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: 
                radial-gradient(circle at 20% 50%, rgba(99, 102, 241, 0.15), transparent 50%),
                radial-gradient(circle at 80% 80%, rgba(168, 85, 247, 0.15), transparent 50%),
                radial-gradient(circle at 40% 20%, rgba(59, 130, 246, 0.1), transparent 50%);
            z-index: -1;
            animation: gradientShift 20s ease infinite;
        }

        @keyframes gradientShift {
            0%, 100% { transform: scale(1) rotate(0deg); }
            50% { transform: scale(1.1) rotate(5deg); }
        }

        nav {
            position: fixed;
            top: 0;
            width: 100%;
            padding: 1.5rem 5%;
            backdrop-filter: blur(20px) saturate(180%);
            background: rgba(0, 0, 0, 0.6);
            border-bottom: 1px solid rgba(255, 255, 255, 0.06);
            z-index: 1000;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        nav.scrolled {
            padding: 1rem 5%;
            background: rgba(0, 0, 0, 0.85);
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
        }

        .nav-content {
            max-width: 1400px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .logo {
            font-size: 1.8rem;
            font-weight: 700;
            background: linear-gradient(135deg, #6366f1 0%, #a855f7 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            letter-spacing: -1px;
        }

        .nav-links {
            display: flex;
            gap: 2.5rem;
            align-items: center;
        }

        .nav-links a {
            color: rgba(255, 255, 255, 0.8);
            text-decoration: none;
            font-weight: 500;
            font-size: 0.95rem;
            transition: all 0.3s ease;
            position: relative;
        }

        .nav-links a::before {
            content: '';
            position: absolute;
            bottom: -5px;
            left: 50%;
            width: 0;
            height: 2px;
            background: linear-gradient(135deg, #6366f1 0%, #a855f7 100%);
            transform: translateX(-50%);
            transition: width 0.3s ease;
        }

        .nav-links a:hover {
            color: #fff;
        }

        .nav-links a:hover::before {
            width: 100%;
        }

        .menu-toggle {
            display: none;
            flex-direction: column;
            cursor: pointer;
            gap: 6px;
        }

        .menu-toggle span {
            width: 28px;
            height: 2px;
            background: #fff;
            transition: all 0.3s ease;
            border-radius: 2px;
        }

        .menu-toggle.active span:nth-child(1) {
            transform: rotate(45deg) translate(8px, 8px);
        }

        .menu-toggle.active span:nth-child(2) {
            opacity: 0;
        }

        .menu-toggle.active span:nth-child(3) {
            transform: rotate(-45deg) translate(7px, -7px);
        }

        .mobile-menu {
            position: fixed;
            top: 80px;
            left: 0;
            width: 100%;
            height: calc(100vh - 80px);
            background: rgba(0, 0, 0, 0.98);
            backdrop-filter: blur(20px);
            display: none;
            flex-direction: column;
            padding: 2rem;
            gap: 1.5rem;
            z-index: 999;
        }

        .mobile-menu.active {
            display: flex;
        }

        .mobile-menu a {
            color: #fff;
            text-decoration: none;
            font-size: 1.5rem;
            font-weight: 600;
            padding: 1rem;
            border-radius: 12px;
            transition: all 0.3s ease;
            background: rgba(255, 255, 255, 0.03);
        }

        .mobile-menu a:hover {
            background: rgba(99, 102, 241, 0.1);
            transform: translateX(10px);
        }

        .hero {
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 2rem 5%;
            position: relative;
        }

        .hero-content {
            text-align: center;
            max-width: 1000px;
            animation: fadeInUp 1s cubic-bezier(0.4, 0, 0.2, 1);
        }

        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(40px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .hero-label {
            display: inline-block;
            padding: 0.5rem 1.5rem;
            background: rgba(99, 102, 241, 0.1);
            border: 1px solid rgba(99, 102, 241, 0.3);
            border-radius: 50px;
            font-size: 0.9rem;
            margin-bottom: 2rem;
            color: #a5b4fc;
            font-weight: 500;
        }

        h1 {
            font-size: clamp(3rem, 8vw, 6rem);
            margin-bottom: 1.5rem;
            background: linear-gradient(135deg, #6366f1 0%, #a855f7 50%, #ec4899 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            font-weight: 800;
            line-height: 1.1;
            letter-spacing: -2px;
        }

        .subtitle {
            font-size: clamp(1.1rem, 2vw, 1.3rem);
            color: rgba(255, 255, 255, 0.6);
            margin-bottom: 3rem;
            line-height: 1.8;
            max-width: 700px;
            margin-left: auto;
            margin-right: auto;
        }

        .cta-buttons {
            display: flex;
            gap: 1rem;
            justify-content: center;
            flex-wrap: wrap;
        }

        .cta-button {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            padding: 1rem 2.5rem;
            background: linear-gradient(135deg, #6366f1 0%, #a855f7 100%);
            color: #fff;
            text-decoration: none;
            border-radius: 12px;
            font-weight: 600;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            box-shadow: 0 10px 40px rgba(99, 102, 241, 0.3);
            position: relative;
            overflow: hidden;
        }

        .cta-button::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
            transition: left 0.5s;
        }

        .cta-button:hover::before {
            left: 100%;
        }

        .cta-button:hover {
            transform: translateY(-3px);
            box-shadow: 0 15px 50px rgba(99, 102, 241, 0.5);
        }

        .cta-button-secondary {
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.1);
            box-shadow: none;
        }

        .cta-button-secondary:hover {
            background: rgba(255, 255, 255, 0.1);
            box-shadow: 0 10px 40px rgba(255, 255, 255, 0.1);
        }

        .features {
            padding: 8rem 5% 6rem;
            max-width: 1400px;
            margin: 0 auto;
        }

        .section-header {
            text-align: center;
            margin-bottom: 5rem;
        }

        .section-title {
            font-size: clamp(2.5rem, 5vw, 3.5rem);
            margin-bottom: 1rem;
            background: linear-gradient(135deg, #6366f1 0%, #a855f7 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            font-weight: 800;
            letter-spacing: -1px;
        }

        .section-subtitle {
            color: rgba(255, 255, 255, 0.5);
            font-size: 1.1rem;
            max-width: 600px;
            margin: 0 auto;
        }

        .features-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
            gap: 2rem;
        }

        .feature-card {
            background: linear-gradient(135deg, rgba(99, 102, 241, 0.05) 0%, rgba(168, 85, 247, 0.05) 100%);
            backdrop-filter: blur(10px);
            padding: 2.5rem;
            border-radius: 24px;
            border: 1px solid rgba(255, 255, 255, 0.06);
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            opacity: 0;
            transform: translateY(30px);
            position: relative;
            overflow: hidden;
        }

        .feature-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: radial-gradient(circle at top left, rgba(99, 102, 241, 0.1), transparent 50%);
            opacity: 0;
            transition: opacity 0.3s ease;
        }

        .feature-card:hover::before {
            opacity: 1;
        }

        .feature-card.visible {
            opacity: 1;
            transform: translateY(0);
            animation: slideInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        @keyframes slideInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .feature-card:hover {
            transform: translateY(-8px);
            border-color: rgba(99, 102, 241, 0.3);
            box-shadow: 0 20px 60px rgba(99, 102, 241, 0.2);
        }

        .feature-icon {
            width: 60px;
            height: 60px;
            background: linear-gradient(135deg, rgba(99, 102, 241, 0.2) 0%, rgba(168, 85, 247, 0.2) 100%);
            border-radius: 16px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 1.5rem;
            position: relative;
        }

        .feature-icon svg {
            width: 30px;
            height: 30px;
            fill: none;
            stroke: #a5b4fc;
            stroke-width: 2;
            stroke-linecap: round;
            stroke-linejoin: round;
        }

        .feature-card h3 {
            font-size: 1.4rem;
            margin-bottom: 1rem;
            color: #fff;
            font-weight: 700;
        }

        .feature-card p {
            color: rgba(255, 255, 255, 0.6);
            line-height: 1.7;
            font-size: 0.95rem;
        }

        .stats {
            padding: 8rem 5%;
            background: rgba(99, 102, 241, 0.02);
            border-top: 1px solid rgba(255, 255, 255, 0.06);
            border-bottom: 1px solid rgba(255, 255, 255, 0.06);
        }

        .stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 3rem;
            max-width: 1200px;
            margin: 3rem auto 0;
        }

        .stat-item {
            text-align: center;
            opacity: 0;
            transform: scale(0.9);
        }

        .stat-item.visible {
            animation: scaleIn 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        @keyframes scaleIn {
            to {
                opacity: 1;
                transform: scale(1);
            }
        }

        .stat-number {
            font-size: clamp(2.5rem, 5vw, 3.5rem);
            font-weight: 800;
            background: linear-gradient(135deg, #6366f1 0%, #a855f7 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin-bottom: 0.5rem;
            line-height: 1;
        }

        .stat-label {
            color: rgba(255, 255, 255, 0.6);
            font-size: 1rem;
            font-weight: 500;
        }

        .developer-section {
            padding: 8rem 5%;
            max-width: 1400px;
            margin: 0 auto;
        }

        .developer-cards {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            gap: 2rem;
            margin-top: 3rem;
        }

        .dev-card {
            background: linear-gradient(135deg, rgba(99, 102, 241, 0.05) 0%, rgba(168, 85, 247, 0.05) 100%);
            backdrop-filter: blur(10px);
            padding: 2.5rem;
            border-radius: 24px;
            border: 1px solid rgba(255, 255, 255, 0.06);
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            text-align: center;
        }

        .dev-card:hover {
            transform: translateY(-8px);
            border-color: rgba(99, 102, 241, 0.3);
            box-shadow: 0 20px 60px rgba(99, 102, 241, 0.2);
        }

        .dev-avatar {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            background: linear-gradient(135deg, #6366f1 0%, #a855f7 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 1.5rem;
            border: 3px solid rgba(99, 102, 241, 0.2);
            position: relative;
            overflow: hidden;
        }

        .dev-avatar::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent);
            transform: rotate(45deg);
            animation: shimmer 3s infinite;
        }

        @keyframes shimmer {
            0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
            100% { transform: translateX(100%) translateY(100%) rotate(45deg); }
        }

        .dev-avatar svg {
            width: 50px;
            height: 50px;
            fill: none;
            stroke: #fff;
            stroke-width: 2;
            stroke-linecap: round;
            stroke-linejoin: round;
            z-index: 1;
        }

        .dev-name {
            font-size: 1.3rem;
            font-weight: 700;
            margin-bottom: 0.5rem;
        }

        .dev-role {
            color: rgba(255, 255, 255, 0.6);
            margin-bottom: 1.5rem;
            font-size: 0.9rem;
        }

        .dev-social {
            display: flex;
            justify-content: center;
            gap: 0.75rem;
        }

        .social-link {
            width: 40px;
            height: 40px;
            border-radius: 12px;
            background: rgba(255, 255, 255, 0.05);
            display: flex;
            align-items: center;
            justify-content: center;
            text-decoration: none;
            color: #fff;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            border: 1px solid rgba(255, 255, 255, 0.06);
        }

        .social-link:hover {
            background: linear-gradient(135deg, #6366f1 0%, #a855f7 100%);
            transform: translateY(-3px);
            border-color: transparent;
        }

        .social-link svg {
            width: 18px;
            height: 18px;
            fill: none;
            stroke: currentColor;
            stroke-width: 2;
            stroke-linecap: round;
            stroke-linejoin: round;
        }

        /* Brat Generator Styles */
        .brat-generator {
            padding: 8rem 5%;
            max-width: 1200px;
            margin: 0 auto;
        }

        .generator-container {
            background: linear-gradient(135deg, rgba(99, 102, 241, 0.05) 0%, rgba(168, 85, 247, 0.05) 100%);
            backdrop-filter: blur(10px);
            padding: 3rem;
            border-radius: 24px;
            border: 1px solid rgba(255, 255, 255, 0.06);
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        }

        .input-group {
            display: flex;
            gap: 1rem;
            margin-bottom: 2rem;
        }

        .text-input {
            flex: 1;
            padding: 1rem 1.5rem;
            background: rgba(0, 0, 0, 0.3);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 12px;
            color: #fff;
            font-size: 1rem;
            transition: all 0.3s ease;
        }

        .text-input:focus {
            outline: none;
            border-color: rgba(99, 102, 241, 0.5);
            box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
        }

        .generate-btn {
            padding: 1rem 2rem;
            background: linear-gradient(135deg, #6366f1 0%, #a855f7 100%);
            color: #fff;
            border: none;
            border-radius: 12px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            box-shadow: 0 10px 40px rgba(99, 102, 241, 0.3);
        }

        .generate-btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 15px 50px rgba(99, 102, 241, 0.5);
        }

        .generate-btn:active {
            transform: translateY(0);
        }

        .result-container {
            margin-top: 2rem;
            padding: 2rem;
            background: rgba(0, 0, 0, 0.2);
            border-radius: 16px;
            border: 1px solid rgba(255, 255, 255, 0.06);
            display: none;
        }

        .result-container.active {
            display: block;
            animation: fadeIn 0.5s ease;
        }

        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }

        .result-title {
            font-size: 1.2rem;
            margin-bottom: 1rem;
            color: #a5b4fc;
            font-weight: 600;
        }

        .result-text {
            font-size: 1.1rem;
            line-height: 1.6;
            color: rgba(255, 255, 255, 0.8);
            margin-bottom: 1.5rem;
            word-break: break-all;
        }

        .copy-btn {
            padding: 0.75rem 1.5rem;
            background: rgba(255, 255, 255, 0.05);
            color: #fff;
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 8px;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .copy-btn:hover {
            background: rgba(255, 255, 255, 0.1);
        }

        .api-info {
            margin-top: 3rem;
            padding: 2rem;
            background: rgba(0, 0, 0, 0.2);
            border-radius: 16px;
            border: 1px solid rgba(255, 255, 255, 0.06);
        }

        .api-info h3 {
            font-size: 1.3rem;
            margin-bottom: 1rem;
            color: #a5b4fc;
        }

        .api-info p {
            color: rgba(255, 255, 255, 0.7);
            margin-bottom: 1rem;
            line-height: 1.6;
        }

        .api-endpoint {
            display: inline-block;
            padding: 0.5rem 1rem;
            background: rgba(0, 0, 0, 0.3);
            border-radius: 8px;
            font-family: monospace;
            color: #a5b4fc;
            border: 1px solid rgba(99, 102, 241, 0.3);
        }

        .notification {
            position: fixed;
            top: 100px;
            right: 20px;
            padding: 1rem 1.5rem;
            background: linear-gradient(135deg, #6366f1 0%, #a855f7 100%);
            color: #fff;
            border-radius: 12px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
            z-index: 10000;
            transform: translateX(400px);
            opacity: 0;
            transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .notification.active {
            transform: translateX(0);
            opacity: 1;
        }

        .notification.success {
            background: linear-gradient(135deg, #10b981 0%, #059669 100%);
        }

        .notification.error {
            background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
        }

        /* Docs Button */
        .docs-button {
            position: fixed;
            bottom: 30px;
            right: 30px;
            width: 60px;
            height: 60px;
            background: linear-gradient(135deg, #6366f1 0%, #a855f7 100%);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #fff;
            text-decoration: none;
            box-shadow: 0 10px 30px rgba(99, 102, 241, 0.4);
            z-index: 1000;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            animation: pulse 2s infinite;
        }

        .docs-button:hover {
            transform: scale(1.1);
            box-shadow: 0 15px 40px rgba(99, 102, 241, 0.6);
        }

        @keyframes pulse {
            0% { box-shadow: 0 0 0 0 rgba(99, 102, 241, 0.7); }
            70% { box-shadow: 0 0 0 15px rgba(99, 102, 241, 0); }
            100% { box-shadow: 0 0 0 0 rgba(99, 102, 241, 0); }
        }

        .docs-button svg {
            width: 24px;
            height: 24px;
        }

        footer {
            padding: 4rem 5%;
            text-align: center;
            border-top: 1px solid rgba(255, 255, 255, 0.06);
            background: rgba(0, 0, 0, 0.5);
        }

        .footer-content {
            max-width: 1400px;
            margin: 0 auto;
        }

        .footer-text {
            color: rgba(255, 255, 255, 0.5);
            font-size: 0.95rem;
        }

        .footer-links {
            display: flex;
            justify-content: center;
            gap: 2rem;
            margin-top: 1.5rem;
            flex-wrap: wrap;
        }

        .footer-links a {
            color: rgba(255, 255, 255, 0.6);
            text-decoration: none;
            transition: color 0.3s ease;
            font-size: 0.9rem;
        }

        .footer-links a:hover {
            color: #a5b4fc;
        }

        @media (max-width: 768px) {
            .nav-links {
                display: none;
            }

            .menu-toggle {
                display: flex;
            }

            .features-grid,
            .developer-cards {
                grid-template-columns: 1fr;
            }

            .stats-grid {
                grid-template-columns: repeat(2, 1fr);
                gap: 2rem;
            }

            .cta-buttons {
                flex-direction: column;
            }

            .cta-button {
                width: 100%;
                justify-content: center;
            }

            .input-group {
                flex-direction: column;
            }

            .generator-container {
                padding: 2rem;
            }

            .docs-button {
                bottom: 20px;
                right: 20px;
                width: 50px;
                height: 50px;
            }
        }

        @media (max-width: 480px) {
            .stats-grid {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>
    <div class="gradient-bg"></div>
    
    <nav id="navbar">
        <div class="nav-content">
            <div class="logo">IZUMI - Brat</div>
            <div class="nav-links">
                <a href="#home">Home</a>
                <a href="#brat-generator">Brat Generator</a>
                <a href="#features">Features</a>
                <a href="#stats">Stats</a>
                <a href="#developers">Developers</a>
            </div>
            <div class="menu-toggle" id="menuToggle">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </nav>

    <div class="mobile-menu" id="mobileMenu">
        <a href="#home">Home</a>
        <a href="#brat-generator">Brat Generator</a>
        <a href="#features">Features</a>
        <a href="#stats">Stats</a>
        <a href="#developers">Developers</a>
    </div>

    <section class="hero" id="home">
        <div class="hero-content">
            <div class="hero-label">Brat Generator Platform</div>
            <h1>Generate Brat Text</h1>
            <p class="subtitle">Ubah teks biasa menjadi teks brat dengan gaya unik menggunakan API kami. Cepat, mudah, dan gratis untuk digunakan.</p>
            <div class="cta-buttons">
                <a href="#brat-generator" class="cta-button">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                    Coba Sekarang
                </a>
                <a href="/docs" class="cta-button cta-button-secondary">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"></path><path d="M2 17l10 5 10-5M2 12l10 5 10-5"></path></svg>
                    Dokumentasi API
                </a>
            </div>
        </div>
    </section>

    <section class="brat-generator" id="brat-generator">
        <div class="section-header">
            <h2 class="section-title">Brat Generator</h2>
            <p class="section-subtitle">Masukkan teks Anda dan ubah menjadi teks brat dengan satu klik</p>
        </div>
        <div class="generator-container">
            <div class="input-group">
                <input type="text" class="text-input" id="textInput" placeholder="Masukkan teks yang ingin diubah..." value="Halo dunia">
                <button class="generate-btn" id="generateBtn">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 8px;">
                        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                    </svg>
                    Send Request
                </button>
            </div>
            
            <div class="result-container" id="resultContainer">
                <div class="result-title">Hasil Brat Text:</div>
                <div class="result-text" id="resultText"></div>
                <button class="copy-btn" id="copyBtn">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 8px;">
                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg>
                    Salin Teks
                </button>
            </div>
            
            <div class="api-info">
                <h3>API Endpoint</h3>
                <p>Gunakan endpoint berikut untuk mengakses Brat Generator API:</p>
                <div class="api-endpoint">GET /api?text=your_text_here</div>
                <p style="margin-top: 1rem;">Contoh penggunaan:</p>
                <div class="api-endpoint">https://api.izumi-brat.com/api?text=Halo%20dunia</div>
                <p style="margin-top: 1rem;">Response format: JSON</p>
            </div>
        </div>
    </section>

    <section class="features" id="features">
        <div class="section-header">
            <h2 class="section-title">Fitur Unggulan</h2>
            <p class="section-subtitle">Semua yang Anda butuhkan untuk membangun aplikasi yang powerful dan scalable</p>
        </div>
        <div class="features-grid">
            <div class="feature-card">
                <div class="feature-icon">
                    <svg viewBox="0 0 24 24"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
                </div>
                <h3>Lightning Fast</h3>
                <p>Response time ultra cepat dengan infrastruktur edge computing dan global CDN untuk performa optimal di seluruh dunia.</p>
            </div>
            <div class="feature-card">
                <div class="feature-icon">
                    <svg viewBox="0 0 24 24"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>
                </div>
                <h3>99.99% Uptime</h3>
                <p>Jaminan availability tinggi dengan SLA terbaik, redundant infrastructure, dan automatic failover system.</p>
            </div>
            <div class="feature-card">
                <div class="feature-icon">
                    <svg viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                </div>
                <h3>Secure & Reliable</h3>
                <p>Keamanan tingkat enterprise dengan enkripsi end-to-end dan sistem autentikasi yang kuat.</p>
            </div>
        </div>
    </section>

    <section class="stats" id="stats">
        <div class="section-header">
            <h2 class="section-title">Dipercaya Developer Worldwide</h2>
            <p class="section-subtitle">Platform yang telah memproses ribuan request dengan performa konsisten</p>
        </div>
        <div class="stats-grid">
            <div class="stat-item">
                <div class="stat-number">1K+</div>
                <div class="stat-label">API Calls/Day</div>
            </div>
            <div class="stat-item">
                <div class="stat-number">99.99%</div>
                <div class="stat-label">Uptime SLA</div>
            </div>
            <div class="stat-item">
                <div class="stat-number">1K+</div>
                <div class="stat-label">Active Developers</div>
            </div>
            <div class="stat-item">
                <div class="stat-number">&lt;50ms</div>
                <div class="stat-label">Avg Response Time</div>
            </div>
        </div>
    </section>

    <section class="developer-section" id="developers">
        <div class="section-header">
            <h2 class="section-title">Meet Our Team</h2>
            <p class="section-subtitle">Tim developer berpengalaman yang membangun dan memelihara infrastruktur IZUMI</p>
        </div>
        <div class="developer-cards">
            <div class="dev-card">
                <div class="dev-avatar">
                    <svg viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                </div>
                <div class="dev-name">Oota - Izumi</div>
                <div class="dev-role">Lead Developer</div>
                <div class="dev-social">
                    <a href="#" class="social-link" title="GitHub">
                        <svg viewBox="0 0 24 24"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    </a>
                    <a href="#" class="social-link" title="LinkedIn">
                        <svg viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                    </a>
                    <a href="#" class="social-link" title="Twitter">
                        <svg viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                    </a>
                </div>
            </div>
            <div class="dev-card">
                <div class="dev-avatar">
                    <svg viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                </div>
                <div class="dev-name">Sannn</div>
                <div class="dev-role">Backend & Frontend</div>
                <div class="dev-social">
                    <a href="https://github.com/SannnTech" class="social-link" title="GitHub">
                        <svg viewBox="0 0 24 24"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    </a>
                    <a href="#" class="social-link" title="LinkedIn">
                        <svg viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                    </a>
                    <a href="#" class="social-link" title="Twitter">
                        <svg viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                    </a>
                </div>
            </div>
        </div>
    </section>

    <footer>
        <div class="footer-content">
            <p class="footer-text">&copy; 2025 IZUMI Brat. All rights reserved.</p>
            <div class="footer-links">
                <a href="https://github.com/zennn08/brat-api" target="_blank">Source Code</a>
                <a href="https://whatsapp.com/channel/0029VbAQBR6CxoAow9hLZ13Z" target="_blank">Channel Info</a>
                <a href="/docs">Documentation</a>
                <a href="#">Contact</a>
            </div>
        </div>
    </footer>

    <!-- Docs Button -->
    <a href="/docs" class="docs-button" title="API Documentation">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
            <line x1="16" y1="13" x2="8" y2="13"></line>
            <line x1="16" y1="17" x2="8" y2="17"></line>
            <polyline points="10 9 9 9 8 9"></polyline>
        </svg>
    </a>

    <!-- Notification -->
    <div class="notification" id="notification"></div>

    <script>
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        const menuToggle = document.getElementById('menuToggle');
        const mobileMenu = document.getElementById('mobileMenu');
        
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            mobileMenu.classList.toggle('active');
        });

        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                mobileMenu.classList.remove('active');
            });
        });

        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.feature-card, .stat-item').forEach(el => {
            observer.observe(el);
        });

        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Brat Generator Logic
        const textInput = document.getElementById('textInput');
        const generateBtn = document.getElementById('generateBtn');
        const resultContainer = document.getElementById('resultContainer');
        const resultText = document.getElementById('resultText');
        const copyBtn = document.getElementById('copyBtn');
        const notification = document.getElementById('notification');

        // Function to show notification
        function showNotification(message, type = 'success') {
            notification.textContent = message;
            notification.className = 'notification ' + type;
            notification.classList.add('active');
            
            setTimeout(() => {
                notification.classList.remove('active');
            }, 3000);
        }

        // Function to generate brat text
        function generateBratText(text) {
            // Simple transformation logic - you can replace this with your actual API call
            const transformations = [
                text => text.toUpperCase(),
                text => text.split('').map(char => 
                    Math.random() > 0.5 ? char.toUpperCase() : char.toLowerCase()
                ).join(''),
                text => text.replace(/a/gi, '4').replace(/e/gi, '3').replace(/i/gi, '1').replace(/o/gi, '0'),
                text => text.split('').reverse().join('')
            ];
            
            const randomTransform = transformations[Math.floor(Math.random() * transformations.length)];
            return randomTransform(text);
        }

        // Generate button click handler
        generateBtn.addEventListener('click', () => {
            const inputText = textInput.value.trim();
            
            if (!inputText) {
                showNotification('Masukkan teks terlebih dahulu!', 'error');
                return;
            }
            
            // Show loading state
            generateBtn.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 8px;"><path d="M21 12a9 9 0 11-6.219-8.56"></path></svg> Generating...';
            generateBtn.disabled = true;
            
            // Simulate API call delay
            setTimeout(() => {
                const bratText = generateBratText(inputText);
                resultText.textContent = bratText;
                resultContainer.classList.add('active');
                
                // Reset button
                generateBtn.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 8px;"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg> Send Request';
                generateBtn.disabled = false;
                
                showNotification('Brat text berhasil dibuat!');
            }, 1000);
        });

        // Copy button click handler
        copyBtn.addEventListener('click', () => {
            const textToCopy = resultText.textContent;
            
            navigator.clipboard.writeText(textToCopy).then(() => {
                showNotification('Teks berhasil disalin!');
            }).catch(err => {
                showNotification('Gagal menyalin teks', 'error');
                console.error('Failed to copy text: ', err);
            });
        });

        // Enter key support for text input
        textInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                generateBtn.click();
            }
        });
    </script>
</body>
</html>
