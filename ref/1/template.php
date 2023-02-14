<?
if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();
?>

<div class="septic-problems-form-container">
	<div class="septic-problems-form js-septic-problems-form">
		<?=$arResult['FORM_HEADER']?>
			<div class="septic-problems-form__wrap">
				<div class="septic-problems-form__steps-count">
					<div class="septic-problems-form__step-count active" data-step-id="1">1</div>
					<div class="septic-problems-form__step-separator"></div>
					<div class="septic-problems-form__step-count" data-step-id="2">2</div>
				</div>
				<div class="septic-problems-form__content">
					<div class="septic-problems-form__step active" data-step-id="1">
						<? foreach($arResult['arAnswers']['problems'] as $arAnswer) { ?>
							<div class="septic-problems-form__option">
								<input 
									class="septic-problems-form__checkbox" 
									type="checkbox" 
									id="<?=$arAnswer['ID']?>" 
									name="form_checkbox_problems[]" 
									value="<?=$arAnswer['ID']?>">
								<label class="septic-problems-form__label" for="<?=$arAnswer['ID']?>"><?=$arAnswer['MESSAGE']?></label>
							</div>
						<? } ?>
						<div class="septic-problems-form__actions">
							<button type="button" class="septic-problems-form__btn btn btn-default" data-form-btn="next">Далее</button>
						</div>
					</div>
					<div class="septic-problems-form__step" data-step-id="2">
						<input 
							class="form-control septic-problems-form__input-text" 
							type="text" 
							name="form_text_<?=$arResult['arAnswers']['name'][0]['ID']?>" 
							id="<?=$arResult['arAnswers']['name'][0]['ID']?>"
							placeholder="<?=$arResult['arAnswers']['name'][0]['MESSAGE']?>">
						<input 
							class="form-control septic-problems-form__input-text" 
							type="text" 
							name="form_text_<?=$arResult['arAnswers']['phone'][0]['ID']?>" 
							id="<?=$arResult['arAnswers']['phone'][0]['ID']?>"
							placeholder="<?=$arResult['arAnswers']['phone'][0]['MESSAGE']?>">
						<div class="septic-problems-form__actions">
							<button type="button" class="septic-problems-form__btn btn btn-default" data-form-btn="pre">Назад</button>
							<input type="submit" class="septic-problems-form__btn btn btn-default" value="Отправить" name="web_form_apply">
						</div>
					</div>
				</div>
			</div>
		<?=$arResult['FORM_FOOTER']?>
	</div>
</div>
