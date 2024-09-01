<?
    $arRe = [];
    
function ToLog($text) {
    $scriptData = date("d-m-Y H:i:s");
    $file = fopen("mail-log.txt","a");
    fwrite($file, $scriptData.' '.$text.PHP_EOL);
    fclose($file);	
}

    if( $_POST ){
        
        $goal = isset( $_POST['goal'] ) ? " (" . $_POST['goal'] . ")" : "";
        $name = isset( $_POST['name'] ) ? $_POST['name'] : "";
        $phone = isset( $_POST['phone'] ) ? $_POST['phone'] : false;
        $company = isset( $_POST['company'] ) ? $_POST['company'] : false;        
        
        $city = isset( $_POST['city'] ) ? $_POST['city'] : false;        
        $region = isset( $_POST['region'] ) ? $_POST['region'] : false;        
        
        if( isset($_POST['tels']) ){
            $phone = $_POST['tels'];
        }
        if( isset($_POST['names']) ){
            $name = $_POST['names'];
        }
        
        if( $phone ){
            //$mailTo = 'k.basamykin@dev-lab.online, a.molodtsov@dev-lab.online, vag_tusur@mail.ru,hammer-55555@mail.ru, poroshino-vova@yandex.ru';
            $mailTo = 'k.basamykin@dev-lab.online, a.molodtsov@dev-lab.online, vag_tusur@mail.ru,hammer-55555@mail.ru';
            $mailSubject = 'Заявка с ленда' . $goal;
            /* $mailText = "<p>Поступила заявка с лендинга.</p><p><strong>Имя отправителя:</strong> $name</p><p><strong>Телефон:</strong> $phone</p><p><strong>Что нужно сделать:</strong> $goal</p>"; */
			
			$mailText = "<p>Поступила заявка с лендинга.</p><p><strong>Имя отправителя:</strong> $name</p><p><strong>Телефон:</strong> $phone</p>";
            
            if( $company ){
                $mailText .= "<p><strong>Название компании:</strong> $company</p>";
            }
            
            if( $city && $region ){
                $mailText .= "<p><strong>Гео заявки:</strong> $city ($region)</p>";
            }

            $headers  = "Content-type: text/html; charset=UTF-8 \r\n"; 
            $headers .= "From: NoReply <info@dev-lab.online>\r\n";     
            $headers .= "Reply-To: info@octopus.beget.ru\r\n"; 

            if( mail($mailTo, $mailSubject, $mailText, $headers) ){
                $arRe['result'] = 1;
                ToLog("OK: письмо отправлено | $mailSubject * $phone |");
            }
            else{
                $arRe['result'] = 0;
            }                
        }
        else{ // не передан телефон
            ToLog("Ошибка: не передан телефон $name $goal");
        }
        
    }
    else {
        $arRe['error'] = 'no POST';
    }
    

    echo json_encode($arRe);
?>