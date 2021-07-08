<?php
use PHPMailer\PHPMailer\PHPMailer;

require_once 'phpmailer/Exception.php';
require_once 'phpmailer/PHPMailer.php';
require_once 'phpmailer/SMTP.php';

$mail = new PHPMailer(true);

$alert= '';

    if(isset($_POST['submit'])){
        $name = $_POST['name'];
        $email = $_POST['email'];
        $tele = $_POST['tele'];
        $message = $_POST['message'];

        try {
            $mail->isSMTP();
            $mail->Host = "smtp.gmail.com";
            $mail->SMTPAuth = true;
            $mail->Username = 'ecouto93@gmail.com';
            $mail->Password = 'Caradecu98!';
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
            $mail->Port = '587';


            $mail->setFrom('ecouto93@gmail.com');
            $mail->addAddress('ecouto93@gmail.com');

            $mail->isHTML(true);
            $mail->Subject = 'Email de Contacto-AQUAPHARMA';

            $mail->Body = "<h3> Nome: $name <br>Telemovel: $tele  <br>Email: $email <br>Mensagem: $message; </h3>";
            
            $mail->SMTPSecure = 'tls';
            $mail->Host = 'smtp.gmail.com';

            $mail->send();
            $alert = "<script>alert('Email enviado com Sucesso!');</script>";
        }catch (phpmailerException $e) {
            //$alert = "<script>alert(.$e->getMessage().);</script>"; 
          } catch(Exception $e){
            //$alert = "<script>alert(.$e->getMessage().);</script>";
        }
    }  
?>